import type { PostMetadata } from "@/types";

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

export async function getPosts(): Promise<PostMetadata[]> {
  try {
    const response = await fetch("/posts.json");
    if (!response.ok) {
      console.error("Failed to fetch posts.json", response.statusText);
    }
    return response.json();
  } catch (error) {
    return [];
  }
}
