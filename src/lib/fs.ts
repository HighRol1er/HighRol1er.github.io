// 마크다운 파일 읽기 유틸리티

export interface PostMetadata {
  title: string;
  body: string;
  fileName: string;
}

/**
 * 마크다운 파일에서 제목과 본문을 추출합니다
 */
export function parseMarkdown(content: string): { title: string; body: string } {
  // <title>태그에서 제목 추출
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // <body>태그에서 본문 추출
  const bodyMatch = content.match(/<body>(.*?)<\/body>/s);
  const body = bodyMatch ? bodyMatch[1].trim() : "";

  return { title, body };
}

/**
 * 본문을 간략하게 자릅니다 (미리보기용)
 */
export function truncateBody(body: string, maxLength: number = 150): string {
  if (body.length <= maxLength) return body;
  return body.substring(0, maxLength).trim() + "...";
}

/**
 * GitHub API를 사용해서 posts 폴더의 마크다운 파일 목록을 가져옵니다
 */
export async function fetchPostsFromGitHub(): Promise<PostMetadata[]> {
  try {
    const owner = import.meta.env.VITE_GITHUB_OWNER || "highrol1er";
    const repo = import.meta.env.VITE_GITHUB_REPO || "highrol1er.github.io";
    
    // GitHub API로 posts 폴더의 파일 목록 가져오기
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/posts`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch posts:", response.statusText);
      return [];
    }

    const files = await response.json();
    
    // .md 파일만 필터링
    const mdFiles = files.filter((file: any) => file.name.endsWith(".md"));

    // 각 파일의 내용 가져오기
    const posts: PostMetadata[] = [];
    
    for (const file of mdFiles) {
      try {
        const fileResponse = await fetch(file.download_url);
        if (fileResponse.ok) {
          const content = await fileResponse.text();
          const { title, body } = parseMarkdown(content);
          
          if (title) {
            posts.push({
              title,
              body,
              fileName: file.name,
            });
          }
        }
      } catch (error) {
        console.error(`Failed to fetch ${file.name}:`, error);
      }
    }

    // 파일명 기준으로 정렬 (최신순)
    posts.sort((a, b) => b.fileName.localeCompare(a.fileName));

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
