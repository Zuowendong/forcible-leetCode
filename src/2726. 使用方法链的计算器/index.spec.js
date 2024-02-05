import { test, expect } from "vitest";

import { Calculator } from "./index";

test("链式调用", () => {
  const res = new Calculator(10).add(5).subtract(7).getResult();
  expect(res).toBe(8);
});

test("幂运算", () => {
  const res = new Calculator(2).multiply(5).power(2).getResult();
  expect(res).toBe(100);
});

test("除法运算边界情况", () => {
  const res = new Calculator(20).divide(0).getResult();
  expect(res).toBe("Division by zero is not allowed");
});
