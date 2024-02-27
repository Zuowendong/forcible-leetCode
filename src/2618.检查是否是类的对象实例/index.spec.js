import { it, describe, expect } from "vitest";
import { checkIfInstanceOf } from "./index";

describe("检查是否是类的对象实例", () => {
  it("时间日期对象实例", () => {
    const func = () => checkIfInstanceOf(new Date(), Date);
    expect(func()).toBe(true);
  });

  it("extend的子类", () => {
    const func = () => {
      class Animal {}
      class Dog extends Animal {}
      return checkIfInstanceOf(new Dog(), Animal);
    };
    expect(func()).toBe(true);
  });

  it("日期的构造函数在逻辑上不能是其自身的实例", () => {
    const func = () => checkIfInstanceOf(Date, Date);
    expect(func()).toBe(false);
  });

  it("Number", () => {
    const func = () => checkIfInstanceOf(5, Number);
    expect(func()).toBe(true);
  });

  it("BigInt", () => {
    const func = () => checkIfInstanceOf(5n, BigInt);
    expect(func()).toBe(true);
  });

  it("Number.NaN", () => {
    const func = () => checkIfInstanceOf(Number.NaN, Number);
    expect(func()).toBe(true);
  });
});
