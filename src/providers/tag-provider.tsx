import { createContext, useContext, useState } from "react";

interface TagContextType {
  tags: Set<string>;
  setTags: (tags: Set<string>) => void;
}

const initialState: TagContextType = {
  tags: new Set(),
  setTags: () => null,
};

const TagContext = createContext<TagContextType>(initialState);

export function TagProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTags] = useState<Set<string>>(new Set());

  return (
    <TagContext.Provider value={{ tags, setTags }}>
      {children}
    </TagContext.Provider>
  );
}

export const useTags = () => {
  const context = useContext(TagContext);
  return context;
};
