import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { optimizeImage } from "./image-utils.js";

interface ImageItem {
  url: string;
  path: string;
  fileName: string;
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    
    try {
      const urlObj = new URL(url);
      const fullPath = urlObj.pathname + (urlObj.search || "");
      
      console.log(`🔍 다운로드 시도: ${urlObj.hostname}${fullPath.substring(0, 80)}...`);
      
      const options = {
        hostname: urlObj.hostname,
        path: fullPath,
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": urlObj.origin,
          "Cache-Control": "no-cache",
        },
      };

      const req = protocol.get(options, (response) => {
        if (response.statusCode !== 200) {
          // GitHub private images의 경우 안내
          if (urlObj.hostname.includes("private-user-images.githubusercontent.com")) {
            console.error(`\n⚠️  GitHub private images는 브라우저에서만 접근 가능합니다.`);
            console.error(`💡 브라우저에서 이미지를 다운로드하거나 public repository로 이동하세요.\n`);
          }
          
          let errorData = "";
          response.on("data", (chunk) => {
            errorData += chunk.toString();
          });
          response.on("end", () => {
            reject(new Error(`Failed to download: ${response.statusCode} ${response.statusMessage}`));
          });
          return;
        }

        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });

        fileStream.on("error", reject);
      });

      req.on("error", (error) => {
        console.error(`❌ 요청 에러:`, error);
        reject(error);
      });

      req.end();
    } catch (error) {
      console.error(`❌ URL 파싱 에러:`, error);
      reject(error);
    }
  });
}

async function processImages(items: ImageItem[]): Promise<{ downloaded: number; optimized: number }> {
  const baseDir = path.join(process.cwd(), "public", "_image");
  let downloaded = 0;
  let optimized = 0;

  for (const item of items) {
    try {
      // 경로 정리
      const cleanPath = item.path.trim().replace(/^\/+|\/+$/g, "");
      const cleanFileName = item.fileName.trim();
      const targetDir = path.join(baseDir, cleanPath);

      // 디렉토리 생성
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 임시 파일 경로 (원본 다운로드)
      const tempPath = path.join(targetDir, `${cleanFileName}.tmp`);
      const webpPath = path.join(targetDir, `${cleanFileName}.webp`);

      // 이미지 다운로드
      console.log(`📥 다운로드 중: ${item.url}`);
      await downloadImage(item.url, tempPath);

      // 바로 WebP로 변환하여 저장
      console.log(`🔄 WebP로 변환 중: ${cleanFileName}`);
      await optimizeImage(tempPath, webpPath);
      
      downloaded++;
      optimized++;

      // 임시 파일 삭제
      fs.unlinkSync(tempPath);

      console.log(`✅ 완료: ${cleanPath}/${cleanFileName}.webp\n`);
    } catch (error) {
      console.error(`❌ 오류 (${item.fileName}):`, error);
    }
  }

  return { downloaded, optimized };
}

// CLI에서 직접 실행할 때
const itemsJson = process.argv[2];
if (itemsJson) {
  try {
    const items: ImageItem[] = JSON.parse(itemsJson);
    processImages(items)
      .then((result) => {
        console.log(`\n✅ 완료: ${result.downloaded}개 다운로드 및 WebP 변환 완료`);
        process.exit(0);
      })
      .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
      });
  } catch (error) {
    console.error("JSON 파싱 오류:", error);
    process.exit(1);
  }
}

export { processImages };
