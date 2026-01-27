import { DefaultLayout, Header } from "@/components/layouts";
import { PostCard } from "@/components/posts/PostCard";
import { useFetchPosts } from "@/hooks";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const PostPage = () => {
  const { posts, loading } = useFetchPosts();
  const [searchParams] = useSearchParams();
  const tagParams = searchParams.get("tag");

  const filteredPosts = useMemo(() => {
    return tagParams ? posts.filter((p) => p.tags.includes(tagParams)) : posts;
  }, [posts, tagParams]);

  if (loading) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        포스트를 불러오는 중...
      </div>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <DefaultLayout>
        <Header title="Posts" />
        <div className="text-center py-8 text-muted-foreground">
          {tagParams
            ? `"${tagParams}" 태그의 포스트가 없습니다.`
            : "아직 작성된 포스트가 없습니다."}
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Header title="Posts" />
      <section className="p-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2">
            {filteredPosts.map((post) => (
              <PostCard key={post.fileName} post={post} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PostPage;
