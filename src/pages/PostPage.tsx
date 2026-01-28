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
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.fileName} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PostPage;
