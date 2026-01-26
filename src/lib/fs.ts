import type { PostMetadata } from "@/types";

export function parseMarkdown(content: string): {
  title: string;
  body: string;
  tags: string[];
} {
  // <title>태그에서 제목 추출
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // <body>태그에서 본문 추출
  const bodyMatch = content.match(/<body>(.*?)<\/body>/s);
  const body = bodyMatch ? bodyMatch[1].trim() : "";

  // <tag>...</tag> 태그 추출
  const tags: string[] = [];
  const tagMatches = content.matchAll(/<tag>(.*?)<\/tag>/gs);
  for (const match of tagMatches) {
    const tagContent = match[1].trim();
    const tagList = tagContent
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    tags.push(...tagList);
  }
  const uniqueTags = Array.from(new Set(tags));

  return { title, body, tags: uniqueTags };
}

export function truncateBody(body: string, maxLength: number = 150): string {
  if (body.length <= maxLength) return body;
  return body.substring(0, maxLength).trim() + "...";
}

// 사실 비동기 아니지롱ㅋ
export async function fetchPosts(): Promise<PostMetadata[]> {
  try {
    const response = await fetch("/posts.json");

    if (!response.ok) {
      console.error("Failed to fetch posts.json:", response.statusText);
      return [];
    }

    const posts: PostMetadata[] = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
