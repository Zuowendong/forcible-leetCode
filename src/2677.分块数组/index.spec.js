import { test, expect } from "vitest";
import { chunk } from "./index";

test("分割只有1个元素的子数组", () => {
  const arr = [1, 2, 3, 4, 5];
  const size = 1;

  expect(chunk(arr, size)).toEqual([[1], [2], [3], [4], [5]]);
});

test("分割3个元素的子数组", () => {
  const arr = [1, 9, 6, 3, 2];
  const size = 3;

  expect(chunk(arr, size)).toEqual([
    [1, 9, 6],
    [3, 2],
  ]);
});

test("分割6个元素的子数组", () => {
  const arr = [8, 5, 3, 2, 6];
  const size = 6;

  expect(chunk(arr, size)).toEqual([[8, 5, 3, 2, 6]]);
});
