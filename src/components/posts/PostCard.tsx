import type { PostMetadata } from "@/types";
import { Badge } from "@/components/ui/badge";
import { POST_URL } from "@/constants/urls";
import { Link } from "react-router-dom";

export const PostCard = ({ post }: { post: PostMetadata }) => {
  return (
    <div className="w-full bg-card text-card-foreground rounded-xl border shadow-sm p-4">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Link
          to={POST_URL(post.fileName)}
          className="text-sm text-muted-foreground hover:text-foreground shrink-0"
        >
          View Post →
        </Link>
      </div>
    </div>
  );
};
