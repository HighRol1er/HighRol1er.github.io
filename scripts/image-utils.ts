import fs from "fs";
import path from "path";
import sharp from "sharp";

/**
 * 이미지를 WebP로 변환
 * @param inputPath 입력 이미지 경로
 * @param outputPath 출력 WebP 경로
 * @param showStats 통계 정보 표시 여부 (기본: false)
 */
export async function optimizeImage(
  inputPath: string,
  outputPath: string,
  showStats: boolean = false
): Promise<void> {
  try {
    const stats = await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    if (showStats) {
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = stats.size;
      const reduction = ((originalSize - optimizedSize) / originalSize) * 100;

      console.log(
        `✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB, ${reduction.toFixed(1)}% 감소)`
      );
    }
  } catch (error) {
    console.error(`❌ ${inputPath} 변환 실패:`, error);
    throw error;
  }
}
