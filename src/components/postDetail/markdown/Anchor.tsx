import type { ComponentProps } from "@/types";

export const Anchor = ({ children, node, ref, ...props }: ComponentProps) => {
  // props를 any나 구체적인 타입으로 캐스팅해서 href를 가져옵니다.
  const href = (props as any).href as string | undefined;

  // 1. 내부 링크 여부 확인
  const isInternal = href?.startsWith("/") || href?.startsWith("#");

  return (
    <a
      href={href}
      className="text-blue-500 font-medium hover:text-blue-600 hover:underline transition-colors underline-offset-4"
      // 외부 링크일 때만 새 창 열기
      target={isInternal ? undefined : "_blank"}
      // 보안 속성 (외부 링크일 때 권장)
      rel={isInternal ? undefined : "noopener noreferrer"}
      {...props}
    >
      {children}
    </a>
  );
};
