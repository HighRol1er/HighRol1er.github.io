import { Loader } from "@/components/common";
import { DefaultLayout, Header } from "@/components/layouts";
import { PostCard } from "@/components/posts/PostCard";
import { useFetchPosts } from "@/hooks";
import { useSearchParams } from "react-router-dom";

export const PostPage = () => {
  const { posts, isLoading } = useFetchPosts();
  const [searchParams] = useSearchParams();
  const tagParams = searchParams.get("tag");

  const filteredByTag = tagParams
    ? posts.filter((p) => p.tags.includes(tagParams))
    : posts;

  if (isLoading) {
    return <Loader />;
  }

  if (filteredByTag.length === 0) {
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
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
          {filteredByTag.map((post, index) => (
            <PostCard key={post.fileName} post={post} index={index} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PostPage;
