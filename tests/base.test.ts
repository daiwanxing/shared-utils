import { describe, it } from "vitest";
import { filterShallowUndef } from "../src/base";
import { makerTreeNodeDepth } from "../src/tree"

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

  it("make a symbol to tree", ({}) => {
    const foo = [
      {
        name: "foo",
        // track: 0
        children: [
          {
            name: "baz",
            // track: 0-0
            children: [
              {
                name: "xyz",
                // track 0-0-0
                children: [
                  {
                    name: "bnm",
                  },
                ],
              },
            ],
          },
          {
            name: "bar",
            // track: 0-1
            children: [
              {
                name: "pop",
              // track: 0-1-0
              },
            ],
          },
        ],
      },
      {
        name: "dash",
      }
    ];

    makerTreeNodeDepth(foo);
    console.log(foo);
  });
});
