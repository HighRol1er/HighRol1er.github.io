import type { ComponentProps } from "@/types";

// 1. 전체 테이블을 감싸는 컨테이너 (스크롤 및 테두리 담당)
export const MarkdownTable = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => (
  <div className="overflow-x-auto my-8 rounded-lg border border-border shadow-sm">
    <table className="min-w-full border-collapse text-left" {...props}>
      {children}
    </table>
  </div>
);

// 2. 테이블 헤더 영역
export const MarkdownThead = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => (
  <thead className="bg-muted/50 border-b border-border" {...props}>
    {children}
  </thead>
);

// 3. 테이블 본문 영역
export const MarkdownTbody = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => (
  <tbody
    className="divide-y divide-border [&>tr]:transition-colors [&>tr]:hover:bg-muted/30"
    {...props}
  >
    {children}
  </tbody>
);

// 4. 테이블 행
export const MarkdownTr = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => <tr {...props}>{children}</tr>;

// 5. 제목 셀
export const MarkdownTh = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => (
  <th className="px-6 py-4 text-sm font-bold text-foreground" {...props}>
    {children}
  </th>
);

// 6. 데이터 셀
export const MarkdownTd = ({
  children,
  node,
  ref,
  ...props
}: ComponentProps) => (
  <td
    className="px-6 py-4 text-sm text-foreground/80 leading-relaxed"
    {...props}
  >
    {children}
  </td>
);
