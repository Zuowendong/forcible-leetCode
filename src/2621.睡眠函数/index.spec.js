import { test, expect } from "vitest";

import { sleep } from "./index";

test("sleep", () => {
  let t = Date.now();
  sleep(100).then(() => {
    expect(Date.now() - t).toBe(100);
  });
});
