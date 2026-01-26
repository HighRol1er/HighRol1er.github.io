export function parseMarkdown(content: string): {
  title: string;
  tags: string[];
} {
  // <title>태그에서 제목 추출
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // <tag>...</tag> 태그 추출
  const tags: string[] = [];
  const tagMatches = content.matchAll(/<tag>(.*?)<\/tag>/gs);
  for (const match of tagMatches) {
    const tagContent = match[1].trim();
    const tagList = tagContent
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    tags.push(...tagList);
  }
  const uniqueTags = Array.from(new Set(tags));

  return { title, tags: uniqueTags };
}
