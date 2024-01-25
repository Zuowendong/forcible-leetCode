import { test, expect } from "vitest";
import { map } from "./index";

test("每个元素+1", () => {
  const arr = [1, 2, 3];
  const fn = function plusOne(n) {
    return n + 1;
  };

  const newArr = map(arr, fn);
  expect(newArr).toEqual([2, 3, 4]);
});

test("此映射函数返回值根据输入数组索引增加每个值", () => {
  const arr = [1, 2, 3];
  const fn = function plusI(n, i) {
    return n + i;
  };
  const newArr = map(arr, fn);
  expect(newArr).toEqual([1, 3, 5]);
});

test("返回值恒为 42", () => {
  const arr = [10, 20, 30];
  const fn = function constant() {
    return 42;
  };
  const newArr = map(arr, fn);
  expect(newArr).toEqual([42, 42, 42]);
});
