import { test, expect, vi } from "vitest";
import { fetchPosts, fetchArticle } from "@/shared/api/posts";
import { mockPosts } from "@/shared/mocks/posts.mock";
import { articeMock } from "@/shared/mocks/article.mock";

test("등록된 게시글 메타데이터 불러오기 성공", async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockPosts,
  });
  const response = await fetchPosts();

  expect(response).toEqual(mockPosts);
});

test("등록된 게시글 메타데이터 불러오기 실패", async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: false,
    statusText: "Internal Server Error",
  });

  const response = await fetchPosts();

  expect(response).toEqual([]);
});

// 아래서부터는 특정 아티클 가져오는 로직임

test("특정 게시글 본문 가져오기 - 성공", async () => {
  const path = "/_post";
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    text: async () => articeMock,
  });
  const response = await fetchArticle(path);

  expect(response).toEqual(articeMock);
});

test("특정 게시글 본문 가져오기 - 실패", async () => {
  const path = "/_post";
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: false,
    statusText: "Internal Srver Error",
    return: null,
  });
  const response = await fetchArticle(path);

  expect(response).toEqual(null);
});
