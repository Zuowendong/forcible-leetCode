import { test, expect } from "vitest";
import { addTwoPromises } from "./index";

test("res = 4", () => {
  addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((res) => {
    expect(res).toBe(4);
  });
});
