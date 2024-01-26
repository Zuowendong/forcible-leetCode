import { test, expect } from "vitest";
import { createCounter } from "./index";

test("init = 5", () => {
  const counter = createCounter(5);

  expect(counter.increment()).toBe(6);
  expect(counter.reset()).toBe(5);
  expect(counter.decrement()).toBe(4);
});
