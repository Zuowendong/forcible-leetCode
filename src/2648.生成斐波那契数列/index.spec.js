import { test, expect } from "vitest";

// import { fibGenerator } from "./index";
import { fibGenerator } from "./index1";

test("callCount 5", () => {
  const gen = fibGenerator();

  expect(gen.next().value).toBe(0);
  expect(gen.next().value).toBe(1);
  expect(gen.next().value).toBe(1);
  expect(gen.next().value).toBe(2);
  expect(gen.next().value).toBe(3);
  expect(gen.next().value).toBe(5);
  expect(gen.next().value).toBe(8);
  expect(gen.next().value).toBe(13);
  expect(gen.next().value).toBe(21);
});
