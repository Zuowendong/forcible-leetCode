import { test, expect } from "vitest";
import { cancellable } from "./index";

test("20毫秒时候取消执行", () => {
  const result = [];

  const fn = (x) => x * 5;
  const args = [2];
  const t = 20;
  const cancelTimeMs = 50;

  const start = performance.now();

  const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
  };

  const cancel = cancellable(log, args, t);

  const maxT = Math.max(t, cancelTimeMs);

  setTimeout(cancel, cancelTimeMs);

  setTimeout(() => {
    // console.log(result); // [{"time":20,"returned":10}]

    expect(result).toEqual([{ time: 20, returned: 10 }]);
  }, maxT + 15);
});
