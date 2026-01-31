import type { PostMetadata } from "@/types";

export async function fetchPosts(): Promise<PostMetadata[]> {
  const response = await fetch("/posts.json");

  if (!response.ok) {
    console.error("Failed to fetch posts.json:", response.statusText);
    return [];
  }

  const posts: PostMetadata[] = await response.json();
  return posts;
}

export async function fetchPostDetail(
  fileName: string,
): Promise<string | null> {
  const response = await fetch(`/_posts/${fileName}`);

  if (!response.ok) {
    console.error("Failed to fetch postDetail", response.statusText);
    return null;
  }

  const postDetail = await response.text();
  return postDetail;
}
