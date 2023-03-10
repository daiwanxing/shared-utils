import { isEmptyArray } from "../src/is";
import { describe, it } from "vitest";

describe("test is function work fine", () => {
  it("empty array should return trurhy", ({ expect }) => {
    expect(isEmptyArray([])).toBe(true);

    expect(isEmptyArray([1, 2, 3])).toBe(false);
    
    expect(isEmptyArray(null)).toBe(false);
  });
});
