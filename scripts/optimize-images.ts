import fs from "fs";
import path from "path";
import { optimizeImage } from "./image-utils.js";

/**
 * 이미지 최적화 스크립트
 * public/_image 폴더의 PNG/JPG 이미지를 WebP로 변환하고 압축
 */

async function optimizeImages() {
  const imageDir = path.join(process.cwd(), "public", "_image");

  if (!fs.existsSync(imageDir)) {
    console.log("public/_image 폴더가 없습니다.");
    return;
  }

  // 모든 이미지 파일 찾기 (재귀적으로)
  const imageExtensions = [".png", ".jpg", ".jpeg"];
  const imageFiles: string[] = [];

  function findImages(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        findImages(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          imageFiles.push(filePath);
        }
      }
    }
  }

  findImages(imageDir);

  if (imageFiles.length === 0) {
    console.log("최적화할 이미지가 없습니다.");
    return;
  }

  console.log(`\n🖼️  ${imageFiles.length}개의 이미지를 WebP로 변환 중...\n`);

  // 각 이미지를 WebP로 변환
  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath).toLowerCase();
    const webpPath = imagePath.replace(ext, ".webp");

    // WebP 파일이 이미 있고 원본보다 최신이면 스킵
    if (fs.existsSync(webpPath)) {
      const originalTime = fs.statSync(imagePath).mtime;
      const webpTime = fs.statSync(webpPath).mtime;
      if (webpTime >= originalTime) {
        console.log(`⏭️  ${path.basename(imagePath)} (이미 최신 WebP 존재)`);
        continue;
      }
    }

    await optimizeImage(imagePath, webpPath, true);
  }

  console.log(`\n✅ 이미지 최적화 완료!\n`);
}

optimizeImages();
