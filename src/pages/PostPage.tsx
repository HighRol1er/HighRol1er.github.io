import { useNavigate } from "react-router-dom";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/layouts/Header";
import { PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PostPage = () => {
  const navigate = useNavigate();

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
    </DefaultLayout>
  );
};

export default PostPage;
