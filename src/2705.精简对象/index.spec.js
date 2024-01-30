import { test, expect } from "vitest";
import { compactObject } from "./index";

test("一维数组", () => {
  const obj = [null, 0, false, 1];

  expect(compactObject(obj)).toEqual([1]);
});

test("二维数组", () => {
  const obj = [null, 0, 5, [0], [false, 16]];

  expect(compactObject(obj)).toEqual([5, [], [16]]);
});

test("嵌套对象", () => {
  const obj = { a: null, b: [false, 1] };

  expect(compactObject(obj)).toEqual({ b: [1] });
});
