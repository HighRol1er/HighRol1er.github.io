import type { PostMetadata } from "@/types";

/**
 * Fetch post MetaData
 */
export async function fetchPosts(): Promise<PostMetadata[]> {
  const response = await fetch("/posts.json");

  if (!response.ok) {
    console.error("Failed to fetch posts.json:", response.statusText);
    return [];
  }

  const posts: PostMetadata[] = await response.json();
  return posts;
}

/**
 * Fetch specific article
 */
export async function fetchArticle(fileName: string): Promise<string | null> {
  const response = await fetch(`/_posts/${fileName}`);

  if (!response.ok) {
    console.error("Failed to fetch article", response.statusText);
    return null;
  }

  const article = await response.text();
  return article;
}
