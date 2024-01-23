import { test, expect } from "vitest";
import { createCounter } from "./index";

test("counter", () => {
  const counter = createCounter(10);

  const num1 = counter();
  expect(num1).toBe(10);

  const num2 = counter();
  expect(num2).toBe(11);

  const num3 = counter();
  expect(num3).toBe(12);
});
