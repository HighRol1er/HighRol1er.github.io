import type { PostMetadata } from "@/types";
import { DefaultLayout, Header } from "@/components/layouts";
import { Date, PostBadge, Admonition } from "@/components/posts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useFetchPosts } from "@/hooks";
import { parseAdmonitions } from "@/shared/lib/markdown-utils";

export const PostDetailPage = () => {
  const { posts, loading } = useFetchPosts();
  const { fileName } = useParams<{ fileName: string }>();
  const [post, setPost] = useState<PostMetadata | null>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const loadPost = async () => {
      if (!fileName) {
        return;
      }

      // 1. 메타데이터 가져오기
      const foundPost = posts.find((p) => p.fileName === fileName);
      if (!foundPost) {
        return;
      }
      setPost(foundPost);

      // 2. 마크다운 파일 내용 가져오기 (public/_posts 폴더에서)
      try {
        const response = await fetch(`/_posts/${fileName}`);
        if (response.ok) {
          const markdown = await response.text();
          // frontmatter 제거
          const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
          let body = frontmatterMatch
            ? markdown.slice(frontmatterMatch[0].length).trim()
            : markdown;
          // Admonition 파싱
          body = parseAdmonitions(body);
          setContent(body);
        }
      } catch (error) {
        console.error("Failed to load post content:", error);
      }
    };

    loadPost();
  }, [fileName, posts]);

  if (loading) {
    return (
      <DefaultLayout>
        <div className="text-center py-8 text-muted-foreground">
          포스트를 불러오는 중...
        </div>
      </DefaultLayout>
    );
  }

  if (!post) {
    return (
      <DefaultLayout>
        <div className="text-center py-8 text-muted-foreground">
          포스트를 찾을 수 없습니다.
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Header title={post.title} />

      <article className="px-4">
        <div className="max-w-4xl mx-auto">
          {/* 메타 정보 */}
          <div className="mb-6 pb-6 border-primary border-b-2">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <PostBadge key={index} tag={tag} />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <Date date={post.timestamp} />
            </div>
          </div>

          {/* 본문 */}
          <article className="markdown-body">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-7">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="ml-2">{children}</li>,
                code: ({ children, className, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const isInline = !className || !match;

                  if (isInline) {
                    return (
                      <code
                        className="bg-muted px-1.5 py-0.5 rounded font-jetbrains-mono"
                        style={{ fontSize: "13px", lineHeight: "1.2" }}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children, ...props }: any) => {
                  // children이 code 요소인지 확인
                  const codeElement = Array.isArray(children)
                    ? children[0]
                    : children;

                  // ReactMarkdown이 code를 pre 안에 넣는 구조
                  if (
                    codeElement &&
                    typeof codeElement === "object" &&
                    "props" in codeElement &&
                    codeElement.props?.className
                  ) {
                    const className = codeElement.props.className;
                    const match = /language-(\w+)/.exec(className || "");
                    const language = match ? match[1] : "";

                    // children을 문자열로 변환
                    const getCodeString = (node: any): string => {
                      if (typeof node === "string") return node;
                      if (Array.isArray(node)) {
                        return node.map(getCodeString).join("");
                      }
                      if (node && typeof node === "object" && "props" in node) {
                        return getCodeString(node.props.children);
                      }
                      return "";
                    };

                    const codeString = getCodeString(
                      codeElement.props.children,
                    ).replace(/\n$/, "");

                    if (language && codeString) {
                      const CodeBlock = () => {
                        const [copied, setCopied] = useState(false);

                        const handleCopy = async () => {
                          try {
                            await navigator.clipboard.writeText(codeString);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          } catch (error) {
                            console.error("Failed to copy code:", error);
                          }
                        };

                        return (
                          <div className="my-4 rounded-lg overflow-hidden relative group">
                            <button
                              onClick={handleCopy}
                              className="absolute top-2 right-2 z-10 p-2 rounded-md bg-[#2d3139] hover:bg-[#3a3f4a] text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                              title="코드 복사"
                            >
                              {copied ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                            <SyntaxHighlighter
                              language={language}
                              style={oneDark}
                              PreTag="div"
                              showLineNumbers
                              lineNumberStyle={{
                                minWidth: "4em",
                                width: "4em",
                                paddingRight: "1em",
                                paddingLeft: "0.5em",
                                color: "rgba(255, 255, 255, 0.4)",
                                borderRight:
                                  "1px solid rgba(255, 255, 255, 0.1)",
                                marginRight: "1em",
                                userSelect: "none",
                                textAlign: "right",
                                fontStyle: "italic",
                                display: "inline-block",
                              }}
                              customStyle={{
                                margin: 0,
                                padding: "1rem",
                                fontFamily:
                                  "'JetBrains Mono', 'Courier New', monospace",
                                fontSize: "13px",
                                lineHeight: "1.2",
                                borderRadius: "0.5rem",
                                background: "#282c34",
                              }}
                              codeTagProps={{
                                style: {
                                  fontFamily:
                                    "'JetBrains Mono', 'Courier New', monospace",
                                  fontStyle: "normal",
                                  fontSize: "13px",
                                  lineHeight: "1.2",
                                },
                              }}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        );
                      };

                      return <CodeBlock />;
                    }
                  }

                  return (
                    <pre
                      className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 font-jetbrains-mono"
                      style={{ fontSize: "13px", lineHeight: "1.2" }}
                      {...props}
                    >
                      {children}
                    </pre>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                // admonition을 처리하기 위한 div 컴포넌트
                div: ({ children, ...props }: any) => {
                  const admonitionType = props["data-admonition"];
                  if (admonitionType) {
                    const type = admonitionType.toLowerCase() as
                      | "info"
                      | "warning"
                      | "success"
                      | "error"
                      | "tip";
                    const validTypes = [
                      "info",
                      "warning",
                      "success",
                      "error",
                      "tip",
                    ];
                    if (validTypes.includes(type)) {
                      return <Admonition type={type}>{children}</Admonition>;
                    }
                  }
                  return <div {...props}>{children}</div>;
                },
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => {
                  // 마크다운 이미지를 Img 컴포넌트로 렌더링
                  let imageSrc = src || "";

                  // _image 경로만 사용
                  // 이미 /_image/로 시작하지 않으면 /_image/ 추가
                  if (!imageSrc.startsWith("/_image/")) {
                    // /로 시작하면 제거하고 _image/ 추가
                    if (imageSrc.startsWith("/")) {
                      imageSrc = `/_image${imageSrc}`;
                    } else {
                      imageSrc = `/_image/${imageSrc}`;
                    }
                  }

                  // WebP 우선 사용
                  // 이미 .webp로 끝나면 그대로 사용, 아니면 확장자 제거 후 .webp 추가
                  let webpSrc = imageSrc;
                  if (!imageSrc.toLowerCase().endsWith(".webp")) {
                    const basePath = imageSrc.replace(
                      /\.(png|jpg|jpeg|gif)$/i,
                      "",
                    );
                    webpSrc = `${basePath}.webp`;
                  }

                  return (
                    <picture>
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={webpSrc}
                        alt={alt}
                        className="w-full object-contain my-4 rounded-lg"
                        style={{ height: "400px" }}
                      />
                    </picture>
                  );
                },
                table: ({ children }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse border border-border">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-border px-4 py-2">{children}</td>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </article>
    </DefaultLayout>
  );
};

export default PostDetailPage;
