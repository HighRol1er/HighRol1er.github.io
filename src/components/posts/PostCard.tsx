import type { PostMetadata } from "@/types";

import { POST_DETAIL_URL } from "@/shared/constants/urls";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Date } from "@/components/posts";
import { PostBadge } from "@/components/posts";

export const Title = ({ title }: { title: string }) => {
  return <h3 className="text-lg font-semibold hover:underline">{title}</h3>;
};

export const PostCard = ({ post, index }: { post: PostMetadata; index: number }) => {
  // 각 카드마다 일관된 랜덤 방향과 딜레이 생성
  const directions = [
    'animate-slide-in-from-left',
    'animate-slide-in-from-right',
    'animate-slide-in-from-top',
    'animate-slide-in-from-bottom',
  ];
  const direction = directions[index % 4];
  const delay = (index % 6) * 100; // 0~500ms 딜레이

  return (
    <div 
      className={`w-full bg-card text-card-foreground rounded-xl border shadow-sm p-4 ${direction}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
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
      </div>
    </div>
  );
};
