import { test, expect } from "vitest";

import { filter } from "./index";

test("过滤掉不大于10的值", () => {
  const arr = [0, 10, 20, 30];
  const fn = function greaterThan10(n) {
    return n > 10;
  };
  const newArr = filter(arr, fn);

  expect(newArr).toEqual([20, 30]);
});

test("删除索引不为 0 的元素", () => {
  const arr = [1, 2, 3];
  const fn = function greaterThan10(n, i) {
    return i === 0;
  };
  const newArr = filter(arr, fn);

  expect(newArr).toEqual([1]);
});

test("像 0 这样的假值应被过滤掉", () => {
  const arr = [-2, -1, 0, 1, 2];
  const fn = function plusOne(n) {
    return n + 1;
  };
  const newArr = filter(arr, fn);

  expect(newArr).toEqual([-2, 0, 1, 2]);
});
