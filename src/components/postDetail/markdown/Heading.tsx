import type { ComponentProps } from "@/types";
import { slugify } from "@/shared/lib";
import { extractText } from "@/shared/lib";

export const Heading1 = ({ children }: ComponentProps) => {
  const id = slugify(extractText(children));
  return (
    <h1 id={id} className="text-3xl font-bold mt-8 mb-4">
      {children}
    </h1>
  );
};

export const Heading2 = ({ children }: ComponentProps) => {
  const id = slugify(extractText(children));
  return (
    <h2 id={id} className="text-2xl font-bold mt-6 mb-3">
      {children}
    </h2>
  );
};

export const Heading3 = ({ children }: ComponentProps) => {
  const id = slugify(extractText(children));
  return (
    <h3 id={id} className="text-xl font-semibold mt-4 mb-2">
      {children}
    </h3>
  );
};
