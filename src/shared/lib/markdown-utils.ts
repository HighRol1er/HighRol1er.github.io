export const slugify = (text: string): string => {
  const slug = String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // 공백 -> '-'
    .replace(/\-+/g, "-"); // 연속된 하이픈 제거

  return slug;
};

/**
 * 마크다운에서 > [!type] 형식을 파싱하여 HTML로 변환
 * @param markdown - 원본 마크다운 문자열
 * @returns admonition이 HTML div로 변환된 마크다운 문자열
 */
export const parseAdmonitions = (markdown: string): string => {
  const lines = markdown.split("\n");
  const result: string[] = [];
  let inAdmonition = false;
  let admonitionType = "";
  let admonitionContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const blockquoteMatch = line.match(/^>\s*\[!(\w+)\]\s*(.*)$/);

    if (blockquoteMatch) {
      // 새로운 admonition 시작
      if (inAdmonition) {
        // 이전 admonition 종료
        result.push(
          `<div data-admonition="${admonitionType}">${admonitionContent.join("\n")}</div>`,
        );
        admonitionContent = [];
      }
      inAdmonition = true;
      admonitionType = blockquoteMatch[1].toLowerCase();
      const content = blockquoteMatch[2];
      if (content.trim()) {
        admonitionContent.push(content);
      }
    } else if (inAdmonition && line.match(/^>\s*(.*)$/)) {
      // admonition 내용 계속
      const contentMatch = line.match(/^>\s*(.*)$/);
      if (contentMatch) {
        admonitionContent.push(contentMatch[1]);
      }
    } else {
      // admonition 종료
      if (inAdmonition) {
        result.push(
          `<div data-admonition="${admonitionType}">${admonitionContent.join("\n")}</div>`,
        );
        inAdmonition = false;
        admonitionType = "";
        admonitionContent = [];
      }
      result.push(line);
    }
  }

  // 마지막에 열려있는 admonition이 있으면 닫기
  if (inAdmonition) {
    result.push(
      `<div data-admonition="${admonitionType}">${admonitionContent.join("\n")}</div>`,
    );
  }

  return result.join("\n");
};

export interface Heading {
  level: number;
  text: string;
  id: string;
}

/**
 * 마크다운에서 헤딩(#, ##, ###) 추출
 * @param markdown - 원본 마크다운 문자열
 * @returns 헤딩 배열
 */
export const extractHeadings = (markdown: string): Heading[] => {
  const lines = markdown.split("\n");
  const headings: Heading[] = [];

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      // ID 생성: 텍스트를 소문자로 변환하고 공백을 하이픈으로 변경
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

      headings.push({ level, text, id });
    }
  }

  return headings;
};
