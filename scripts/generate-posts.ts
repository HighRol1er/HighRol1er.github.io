import fs from "fs";
import path from "path";

interface PostMetadata {
  title: string;
  body: string;
  tags: string[];
  timestamp: string;
  fileName: string;
}

function parseMarkdown(content: string, fileName: string, filePath: string): { 
  title: string; 
  body: string; 
  tags: string[];
  timestamp: string;
} {
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const bodyMatch = content.match(/<body>(.*?)<\/body>/s);
  const body = bodyMatch ? bodyMatch[1].trim() : "";

  // 태그 추출 (여러 개의 <tag> 태그 또는 하나의 태그에 콤마로 구분)
  const tags: string[] = [];
  
  // 여러 개의 <tag>...</tag> 태그 찾기
  const tagMatches = content.matchAll(/<tag>(.*?)<\/tag>/gs);
  for (const match of tagMatches) {
    const tagContent = match[1].trim();
    // 콤마로 구분된 태그들 분리
    const tagList = tagContent.split(",").map(t => t.trim()).filter(t => t);
    tags.push(...tagList);
  }

  // 중복 제거
  const uniqueTags = Array.from(new Set(tags));

  // 타임스탬프 추출 (우선순위: <date> 태그 > 파일명 날짜 > 파일 수정 시간)
  let timestamp = "";

  // 1. <date> 태그에서 추출
  const dateMatch = content.match(/<date>(.*?)<\/date>/s);
  if (dateMatch) {
    timestamp = dateMatch[1].trim();
  } else {
    // 2. 파일명에서 날짜 추출 (YYYY-MM-DD 형식)
    const dateFromFileName = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
    if (dateFromFileName) {
      timestamp = dateFromFileName[1];
    } else {
      // 3. 파일 수정 시간 사용
      const stats = fs.statSync(filePath);
      timestamp = stats.mtime.toISOString().split("T")[0]; // YYYY-MM-DD
    }
  }

  return { title, body, tags: uniqueTags, timestamp };
}

function generatePostsJson() {
  const postsDir = path.join(process.cwd(), "posts");
  const outputPath = path.join(process.cwd(), "public", "posts.json");

  if (!fs.existsSync(postsDir)) {
    console.log("posts 폴더가 없습니다. 빈 배열로 생성합니다.");
    fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    return;
  }

  const files = fs.readdirSync(postsDir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const posts: PostMetadata[] = [];

  for (const file of mdFiles) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { title, body, tags, timestamp } = parseMarkdown(content, file, filePath);

    if (title) {
      posts.push({
        title,
        body,
        tags,
        timestamp,
        fileName: file,
      });
    }
  }

  // 타임스탬프 기준으로 정렬 (최신순)
  posts.sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  // public 폴더가 없으면 생성
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`✅ ${posts.length}개의 포스트를 생성했습니다: ${outputPath}`);
}

generatePostsJson();
