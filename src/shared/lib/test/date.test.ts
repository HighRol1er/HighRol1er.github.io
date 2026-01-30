import { test, expect } from "vitest";
import { formatDate } from "../date-utils";
/**
 *  요구사항
 *  Given Year-Month-Day / e.g 2026-01-01
 *  Taken Month-Date-Year / e.g January 01, 2026
 */

test("날짜가 주어지면 해당 Taken 형식으로 바꿔줘야함", () => {
  const givenDate = "2026-01-01";

  const date = new Date(givenDate);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  const fullDate = `${month} ${day}, ${year}`;

  expect(year).toBe(2026);
  expect(month).toBe("January");
  expect(day).toBe(1);
  expect(fullDate).toBe("January 1, 2026");
});

test("실제 데이터 포메터 테스트", () => {
  const givenDate = "2026-01-01";

  const date = formatDate(givenDate);

  expect(date).toBe("Posted on January 1, 2026");
});
