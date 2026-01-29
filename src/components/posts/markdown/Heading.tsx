import type { ReactNode } from "react";

export const Heading1 = ({ children }: { children: ReactNode }) => {
  const text = String(children);
  const id = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  return (
    <h1 id={id} className="text-3xl font-bold mt-8 mb-4">
      {children}
    </h1>
  );
};

export const Heading2 = ({ children }: { children: ReactNode }) => {
  const text = String(children);
  const id = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  return (
    <h2 id={id} className="text-2xl font-bold mt-6 mb-3">
      {children}
    </h2>
  );
};

export const Heading3 = ({ children }: { children: ReactNode }) => {
  const text = String(children);
  const id = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  return (
    <h3 id={id} className="text-xl font-semibold mt-4 mb-2">
      {children}
    </h3>
  );
};
