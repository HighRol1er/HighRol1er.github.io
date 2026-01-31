import type { ComponentProps } from "@/types";

export const PreformattedText = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => {
  return (
    <pre className="bg-muted rounded-lg overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  );
};
