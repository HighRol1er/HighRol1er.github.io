import type { PostMetadata } from "@/types";

import { fetchPosts } from "@/shared/api/posts";
import { useEffect, useState } from "react";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    loadPosts();
  }, []);
  return { posts, isLoading };
};
