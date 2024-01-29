import { test, expect } from "vitest";
import { argumentsLength } from "./index";

test("length = 1", () => {
  expect(argumentsLength(1, 2, 3)).toBe(3);
});
