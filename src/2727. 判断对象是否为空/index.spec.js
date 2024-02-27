import { test, expect } from "vitest";
import { isEmpty } from "./index";

test("有键值对的对象", () => {
  const obj = { x: 5, y: 42 };
  expect(isEmpty(obj)).toBe(false);
});

test("空对象", () => {
  const obj = {};
  expect(isEmpty(obj)).toBe(true);
});

test("空对象", () => {
  const obj = [null, false, 0];
  expect(isEmpty(obj)).toBe(false);
});