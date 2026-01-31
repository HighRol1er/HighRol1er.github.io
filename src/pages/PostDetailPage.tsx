import { Loader } from "@/components/common";
import { DefaultLayout, Header } from "@/components/layouts";
import { PostStats } from "@/components/postDetail";
import { ComponentConfig } from "@/components/postDetail/markdown";
import { Agenda } from "@/components/posts";
import { useFetchPosts } from "@/hooks";
import { fetchPostDetail } from "@/shared/api/posts";
import { extractHeadings, type Heading } from "@/shared/lib/markdown-utils";
import type { PostMetadata } from "@/types";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const PostDetailPage = () => {
  const { posts, isLoading } = useFetchPosts();
  const { fileName } = useParams<{ fileName: string }>();
  const [postMeta, setPostMeta] = useState<PostMetadata | null>(null);
  const [content, setContent] = useState<string>("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      if (!fileName) {
        return;
      }

      const foundPost = posts.find((p) => p.fileName === fileName);
      if (!foundPost) {
        return;
      }

      setPostMeta(foundPost);

      try {
        const response = await fetchPostDetail(fileName);
        if (response) {
          const markdown = response;
          // frontmatter 제거
          const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
          let body = frontmatterMatch
            ? markdown.slice(frontmatterMatch[0].length).trim()
            : markdown;

          const extractedHeadings = extractHeadings(body);
          setHeadings(extractedHeadings);

          setContent(body);
        }
      } catch (error) {
        console.error("Failed to load post content:", error);
      }
    };

    loadPost();
  }, [fileName, posts]);

  if (isLoading || !postMeta) {
    return (
      <DefaultLayout>
        <Loader />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Header title={postMeta.title} />
      <article className="px-2 sm:px-4 max-w-7xl mx-auto flex gap-4 ">
        <div className="flex-1 max-w-4xl">
          <PostStats postMeta={postMeta} />
          {/* 본문 */}
          <article className="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={ComponentConfig}
            >
              {content}

              {/* {contents} */}
            </ReactMarkdown>
          </article>
          <div className="pb-75"></div>
        </div>

        {/* 목차 (오른쪽 사이드바) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <Agenda headings={headings} />
        </aside>
      </article>
    </DefaultLayout>
  );
};

export default PostDetailPage;
