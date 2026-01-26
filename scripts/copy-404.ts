import fs from "fs";
import path from "path";

const distDir = path.join(process.cwd(), "dist");
const indexHtml = path.join(distDir, "index.html");
const notFoundHtml = path.join(distDir, "404.html");

if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log("✅ 404.html created successfully");
} else {
  console.error("❌ index.html not found in dist folder");
  process.exit(1);
}
