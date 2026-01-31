import type { ComponentProps } from "@/types";
import type { ReactNode } from "react";

// 1. 이미지 전용 속성을 포함하도록 인터페이스 확장
interface ImgProps extends ComponentProps {
  src?: string;
  alt?: string;
  children?: ReactNode;
}

export const Image = ({ src, alt, node, ref, ...props }: ImgProps) => {
  let imageSrc = src || "";

  // 경로 수정 로직
  if (!imageSrc.startsWith("/_image/")) {
    if (imageSrc.startsWith("/")) {
      imageSrc = `/_image${imageSrc}`;
    } else {
      imageSrc = `/_image/${imageSrc}`;
    }
  }

  // WebP 변환 로직
  let webpSrc = imageSrc;
  if (!imageSrc.toLowerCase().endsWith(".webp")) {
    const basePath = imageSrc.replace(/\.(png|jpg|jpeg|gif)$/i, "");
    webpSrc = `${basePath}.webp`;
  }

  return (
    <picture className="block w-full text-center my-8">
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={webpSrc}
        alt={alt || ""}
        className="mx-auto max-w-full h-auto object-contain rounded-lg shadow-sm border border-border"
        loading="lazy"
        {...props} // 3. 이제 props에는 ref와 node가 없어 안전합니다.
      />
    </picture>
  );
};
