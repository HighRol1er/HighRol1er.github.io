import type { PostMetadata } from "@/types";

import { Date, Tags } from "@/components/posts";

export const PostStats = ({ post }: { post: PostMetadata }) => {
  return (
    <div className="mb-6 pb-6 border-primary border-b-2">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <Tags key={index}>{tag}</Tags>
        ))}
      </div>
      <Date date={post.timestamp} />
    </div>
  );
};
