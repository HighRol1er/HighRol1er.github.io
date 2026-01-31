import type { ComponentProps } from "@/types";

export const Paragraph = ({ children }: ComponentProps) => {
  return <p className="mb-3 leading-7">{children}</p>;
};
