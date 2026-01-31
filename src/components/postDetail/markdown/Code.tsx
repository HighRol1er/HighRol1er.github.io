import type { ComponentProps } from "@/types";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";

export const Code = ({ children, className }: ComponentProps) => {
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  const isInline = !className || !match;

  // 2. 텍스트 추출 (복사 및 하이라이트용)
  const codeString = String(children).replace(/\n$/, "");

  if (isInline) {
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded font-jetbrains-mono text-[13px] leading-[1.2]">
        {children}
      </code>
    );
  }

  // 복사 핸들러
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const myCustomTheme = {
    ...oneDark,
    comment: {
      ...oneDark["comment"],
      fontStyle: "italic",
    },
    keyword: {
      ...oneDark["keyword"],
      fontStyle: "italic",
    },
    string: {
      ...oneDark["string"],
      // 문자열은 똑바로 세우고 싶다면 normal
      fontStyle: "normal",
    },
  };

  // full code block >>> ``` { ...} ```
  // 4. 블록 코드 (백틱 3개 - 요청하신 스타일 적용)
  return (
    <div className="relative">
      <Button
        size="icon"
        variant="outline"
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 p-2 rounded-md bg-[#2d3139] hover:bg-[#3a3f4a] text-gray-300 hover:text-white transition-colors"
      >
        {copied ? (
          <Check size={16} className="text-green-600" />
        ) : (
          <Copy size={16} />
        )}
      </Button>

      <SyntaxHighlighter
        language={language}
        style={myCustomTheme}
        PreTag="div"
        showLineNumbers
        lineNumberStyle={{
          borderRight: "1px solid",
          marginRight: "1em",
          display: "inline-block",
        }}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "13px",
          lineHeight: "1.2",
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "13px",
            lineHeight: "1.3",
          },
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
