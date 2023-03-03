import { it, describe } from "vitest";
import {
  intersection,
  union,
  difference,
} from "../src/array";

describe("test array", () => {
  it("should return both elements", ({ expect }) => {
    expect(intersection([1, 2, 3], [2, 3])).toEqual([2, 3]);
  });

  it("should return exclude intersection", ({ expect }) => {
    expect(difference([1, 2, 3], [1])).toEqual([2, 3]);
  });

  it("should return union intersection", ({ expect }) => {
    expect(
      union([3890, 321, 390, 32], [390, 3890, 1, 2, 3])
    ).toEqual([3890, 321, 390, 32, 1, 2, 3]);
  });
});
