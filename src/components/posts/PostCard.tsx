import type { PostMetadata } from "@/types";

import { POST_DETAIL_URL } from "@/shared/constants/urls";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Date } from "@/components/posts";
import { PostBadge } from "@/components/posts";

export const Title = ({ title }: { title: string }) => {
  return <h3 className="text-lg font-semibold hover:underline">{title}</h3>;
};

export const GoToPost = ({ fileName }: { fileName: string }) => {
  return (
    <Link
      to={POST_DETAIL_URL(fileName)}
      className="text-sm text-muted-foreground hover:text-foreground shrink-0"
    >
      Go to Post →
    </Link>
  );
};

export const PostCard = ({ post }: { post: PostMetadata }) => {
  return (
    <div className="w-full bg-card text-card-foreground rounded-xl border shadow-sm p-4">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Link to={POST_DETAIL_URL(post.fileName)}>
            <Title title={post.title} />
          </Link>
          <Date date={post.timestamp} />
          <Separator />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <PostBadge key={index} tag={tag} />
            ))}
          </div>
        </div>
        <GoToPost fileName={post.fileName} />
      </div>
    </div>
  );
};
