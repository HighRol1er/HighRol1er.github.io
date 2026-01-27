import fs from "fs";
import path from "path";

interface PostMetadata {
  title: string;
  tags: string[];
  timestamp: string;
  fileName: string;
}

function parseMarkdown(
  content: string,
  fileName: string,
  filePath: string,
): {
  title: string;
  tags: string[];
  timestamp: string;
} {
  let title = "";
  const tags: string[] = [];
  let timestamp = "";

  // YAML frontmatter 형식 파싱 (---로 감싸진 블록)
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];

    // title 추출
    const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
    if (titleMatch) {
      title = titleMatch[1].trim().replace(/^["']|["']$/g, ""); // 따옴표 제거
    }

    // tags 추출 (배열 형식: [tag1, tag2])
    const tagsMatch = frontmatter.match(/^tags:\s*(.+)$/m);
    if (tagsMatch) {
      const tagsContent = tagsMatch[1].trim();
      // 배열 형식 [tag1, tag2] 파싱
      const arrayMatch = tagsContent.match(/^\[(.*)\]$/);
      if (arrayMatch) {
        const tagList = arrayMatch[1]
          .split(",")
          .map((t) => t.trim().replace(/^["']|["']$/g, ""))
          .filter((t) => t);
        tags.push(...tagList);
      }
    }

    // date 추출 (timestamp로 사용)
    const dateMatch = frontmatter.match(/^date:\s*(.+)$/m);
    if (dateMatch) {
      timestamp = dateMatch[1].trim();
    }
  }

  // date가 없으면 fallback (파일명 날짜 > 파일 수정 시간)
  if (!timestamp) {
    // 파일명에서 날짜 추출 (YYYY-MM-DD 형식)
    const dateFromFileName = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
    if (dateFromFileName) {
      timestamp = dateFromFileName[1];
    } else {
      // 파일 수정 시간 사용
      const stats = fs.statSync(filePath);
      timestamp = stats.mtime.toISOString().split("T")[0]; // YYYY-MM-DD
    }
  }

  const uniqueTags = Array.from(new Set(tags));
  return { title, tags: uniqueTags, timestamp };
}

function generatePostsJson() {
  // public/posts 폴더에서 게시글 읽기 (단일 소스)
  const postsDir = path.join(process.cwd(), "public", "_posts");
  const outputPath = path.join(process.cwd(), "public", "posts.json");

  // public/posts 폴더가 없으면 생성
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
    console.log("public/_posts 폴더가 없습니다. 생성했습니다.");
    fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    return;
  }

  const files = fs.readdirSync(postsDir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const posts: PostMetadata[] = [];

  for (const file of mdFiles) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { title, tags, timestamp } = parseMarkdown(content, file, filePath);

    if (title) {
      posts.push({
        title,
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
