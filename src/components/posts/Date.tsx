import { formatPostDate } from "@/shared/lib/date-utils";

export const Date = ({ date }: { date: string }) => {
  return (
    <span className="text-sm text-muted-foreground font-lora">
      {formatPostDate(date)}
    </span>
  );
};
