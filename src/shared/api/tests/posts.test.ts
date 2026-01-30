import { test, expect, vi } from "vitest";
import { fetchPosts } from "@/shared/api/posts";
import { mockPosts } from "@/shared/mocks/posts.mock";

test("게시글 불러오기 성공", async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockPosts,
  });
  const response = await fetchPosts();

  expect(response).toEqual(mockPosts);
});

test("게시글 불러오기 실패", async () => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: false,
    statusText: "Internal Server Error",
  });

  const response = await fetchPosts();

  expect(response).toEqual([]);
});
