import { test, expect } from "vitest";

import { createHelloWorld } from "./index";

test("返回Hello World", () => {
  const f = createHelloWorld();
  expect(f()).toBe("Hello World");
});
