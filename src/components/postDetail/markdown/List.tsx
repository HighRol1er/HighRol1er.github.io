import type { ComponentProps } from "@/types";
export const UnorderedList = ({ children }: ComponentProps) => {
  return (
    <ul className="list-disc list-outside mb-4 space-y-2 ml-6">{children}</ul>
  );
};
export const OrderedList = ({ children }: ComponentProps) => {
  return (
    <ol className="list-decimal list-outside mb-4 space-y-2 ml-6">
      {children}
    </ol>
  );
};
export const ListItem = ({ children }: ComponentProps) => {
  return <li className="leading-7">{children}</li>;
};
