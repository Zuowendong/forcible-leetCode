import { test, expect } from "vitest";

import { reduce } from "./index";

test("value = 10", () => {
  const nums = [1, 2, 3, 4];
  const fn = function sum(accum, curr) {
    return accum + curr;
  };
  expect(reduce(nums, fn, 0)).toBe(10);
});

test("value = 130", () => {
  const nums = [1, 2, 3, 4];
  const fn = function sum(accum, curr) {
    return accum + curr * curr;
  };
  expect(reduce(nums, fn, 100)).toBe(130);
});

test("value = 25", () => {
  const nums = [];
  const fn = function sum(accum, curr) {
    return 0;
  };
  expect(reduce(nums, fn, 25)).toBe(25);
});
