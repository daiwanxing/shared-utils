import { describe, it } from "vitest";
import { filterShallowUndef } from "../src/base";


describe("base utiils", () => {
  it("filterEmpty", ({ expect }) => {
    const foo = {
      name: "foo",
      age: 0,
      sex: null,
      whag: undefined,
      gender: {},
    };

    expect(filterShallowUndef(foo)).toEqual({
      name: "foo",
      age: 0,
      gender: {},
    });
  });
});
