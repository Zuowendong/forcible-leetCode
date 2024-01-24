import { test, expect } from "vitest";
import { compose } from "./index";

test("复合函数", () => {
  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  expect(fn(4)).toBe(9);
});
