import type { PostMetadata } from "@/types";

import { useState, useEffect } from "react";

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

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);
  return { posts, loading };
};
