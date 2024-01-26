import { test, expect } from "vitest";
import { once } from "./index";

test("[1,2,3]=6", () => {
  const fn = (a, b, c) => a + b + c;
  const onceFn = once(fn);

  expect(onceFn(1, 2, 3)).toBe(6);
  expect(onceFn(4, 5, 6)).toBe(undefined);
});
