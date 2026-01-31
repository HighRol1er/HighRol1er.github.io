import { describe, expect, test } from "vitest";
import { slugify } from "../markdown-utils";

describe("slugify-util 함수 테스트", () => {
  const input = "Hello World";
  const output = "hello-world";

  const r = slugify(input);

  test("소문자로 변경 + 공백을 '-'로 변경", () => {
    expect(r).toBe(output);
  });

  test("시작/끝 공백 제거", () => {
    const input = " Hello   World ";
    const result = slugify(input);
    expect(result).toBe(output);
  });

  test("연속된 하이픈 제거", () => {
    const input = "Hello--World";
    const result = slugify(input);

    expect(result).toBe("hello-world");
  });

  test("한글은 삭제되면 안됨", () => {
    const input = "안녕 세계";
    const result = slugify(input);

    expect(result).toBe("안녕-세계");
  });
});
