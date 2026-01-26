import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/layouts/Header";
import { PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchPostsFromGitHub, truncateBody, type PostMetadata } from "@/lib/fs";
import SpotlightCard from "@/components/SpotlightCard";

export const PostPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchPostsFromGitHub();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const handleNewPost = () => {
    navigate("/posts/write");
  };

  return (
    <DefaultLayout>
      <Header title="Posts">
        <Button variant="default" onClick={handleNewPost}>
          <PencilIcon className="w-4 h-4" />
          New Post
        </Button>
      </Header>
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">
              포스트를 불러오는 중...
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              아직 작성된 포스트가 없습니다.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <SpotlightCard key={post.fileName}>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {truncateBody(post.body)}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PostPage;
