import { describe, test, it, vi } from "vitest";
import {
  isUndefined,
  isTruthy,
  isObject,
  isFunction,
  isNumber,
  isPrimitiveType
} from "../src/type-guard";

import { isEmptyObject, isEmptyString, isNumberDecimal } from "../src/is";

import { isIE } from "../src/is";

vi.stubEnv("NODE_ENV", "develop");

const isDev = process.env.NODE_ENV === "develop";

describe.runIf(isDev).todo("unimplemented suite");

describe("suite", () => {
  it.todo("unimplemented suite");
});

describe("test utils", () => {
  test.skip("isUndefined", ({ expect }) => {
    expect(isUndefined(undefined)).toBeTruthy();

    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined(1)).toBeFalsy();
    expect(isUndefined("text")).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(Symbol("symbol"))).toBeFalsy();
  });

  it("isTruhy", ({ expect }) => {
    expect(isTruthy(1)).toBeTruthy();
    expect(isTruthy("text")).toBeTruthy();
    expect(isTruthy({})).toBeTruthy();
    expect(isTruthy([])).toBeTruthy();

    expect(isTruthy(0)).toBeFalsy();
    expect(isTruthy("")).toBeFalsy();
    expect(isTruthy(null)).toBeFalsy();
    expect(isTruthy(undefined)).toBeFalsy();
  });

  it("isObject", ({ expect }) => {
    expect(isObject({})).toBeTruthy();
    expect(isObject(null)).toBeFalsy();
  });

  it("isEmptyObject", ({ expect }) => {
    expect(() => isEmptyObject(1)).toThrowError();

    expect(isEmptyObject({})).toBeTruthy();

    const foo = Object.create({ name: 'foo' });
    expect(isEmptyObject(foo)).toBeTruthy();
    expect(isEmptyObject(foo, true)).toBeFalsy();
    expect(isEmptyObject({ foo: "foo" })).toBeFalsy();
  });

  it("isEmptyString", ({ expect }) => {
    expect(isEmptyString("")).toBeTruthy();
    expect(isEmptyString("    ")).toBeTruthy();
    expect(isEmptyString("n")).toBeFalsy();
    expect(isEmptyString(null)).toBeFalsy();
  });

  it("isFunction", ({ expect }) => {
    expect(isFunction(() => {})).toBeTruthy();
  });

  it("isNumberDecimal", ({ expect }) => {
    expect(isNumberDecimal(12321)).toBe(false);
    expect(isNumberDecimal(1312.3123213)).toBe(true);
    expect(isNumberDecimal(-1312.3123213)).toBe(true);
  });

  it("isNumber", ({ expect }) => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });
});

describe("Internet Explorer detection", () => {
  it("detects Internet Explorer 11", ({ expect }) => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";
    expect(isIE(userAgent)).toBe(true);
  });

  it("detects any version of Internet Explorer", ({ expect }) => {
    const userAgent =
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)";
    expect(isIE(userAgent)).toBe(true);
  });

  it("does not detect other browsers", ({ expect }) => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";
    expect(isIE(userAgent)).toBe(false);
  });
});

describe("test value whethere primitive type", () => {
  it("test null is a primitive type", ({ expect }) => {
    expect(isPrimitiveType(null)).toBe(true);
  })
  
  it("test {} not a primitive type", ({ expect }) => {
    expect(isPrimitiveType({})).toBe(false);
  })

  it("test undefined is a primitive type", ({ expect }) => {
    expect(isPrimitiveType(undefined)).toBe(true);
  })

  it("test function not a primitive type", ({ expect }) => {
    expect(isPrimitiveType(() => {})).toBe(false);
  })

  it("test string not a primitive type", ({ expect }) => {
    expect(isPrimitiveType("string")).toBe(true);
  })
})
