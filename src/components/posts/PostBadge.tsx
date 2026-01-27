import { Badge } from "@/components/ui/badge";

interface PostBadgeProps {
  tag: string;
  key: number;
}

export const PostBadge = ({ tag, key }: PostBadgeProps) => {
  return (
    <Badge
      key={key}
      className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
    >
      {tag}
    </Badge>
  );
};
