import { test, expect } from "vitest";
import "./index.js";

test("数组last方法输出最后一元素", () => {
  expect([1, 2, 4].last()).toBe(4);
});

test("数组没有元素返回 -1", () => {
  expect([].last()).toBe(-1);
});
