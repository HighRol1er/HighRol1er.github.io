import type { PostMetadata } from "@/types";

import { Date, PostBadge } from "@/components/posts";

export const PostMetaData = ({ post }: { post: PostMetadata }) => {
  return (
    <div className="mb-6 pb-6 border-primary border-b-2">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <PostBadge key={index} tag={tag} />
        ))}
      </div>
      <div className="text-sm text-muted-foreground">
        <Date date={post.timestamp} />
      </div>
    </div>
  );
};
