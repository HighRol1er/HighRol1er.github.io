import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/layouts/Header";
import { PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchPosts } from "@/lib/fs";
import type { PostMetadata } from "@/types";
import { PostCard } from "@/components/posts/PostCard";
import { useTags } from "@/providers/tag-provider";
import { useSearchParams } from "react-router-dom";

export const PostPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const { setTags } = useTags();
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchPosts();

      const allTags = new Set<string>();
      fetchedPosts.forEach((post) => {
        post.tags.forEach((tag) => allTags.add(tag));
      });
      setTags(allTags);

      // 태그 필터링
      const filteredPosts = tag
        ? fetchedPosts.filter((post) => post.tags.includes(tag))
        : fetchedPosts;
      setPosts(filteredPosts);

      setLoading(false);
    };

    loadPosts();
  }, [setTags, tag]);

  const handleNewPost = () => {
    navigate("/posts/write");
  };

  return (
    <DefaultLayout>
      {/* HEADER  */}
      <Header title="Posts">
        <Button variant="default" onClick={handleNewPost}>
          <PencilIcon className="w-4 h-4" />
          New Post
        </Button>
      </Header>
      {/* CONTENT */}
      <section className="p-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">
              포스트를 불러오는 중...
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              아직 작성된 포스트가 없습니다.
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {posts.map((post) => (
                <PostCard key={post.fileName} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PostPage;
