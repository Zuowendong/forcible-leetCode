import { expect, test } from "vitest";
import { expectFn } from "./index";

test("toBe 5", () => {
  expect(expectFn(5).toBe(5)).toBe(true);
  //   expect(expectFn(5).toBe(null)).toBe()
});
