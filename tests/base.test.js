import { describe, it } from "vitest";

describe("base utiils", () => {
    it("filterEmpty", ({ expect }) => {
        const foo = {
            name: 'foo',
            age: 0,
            sex: null,
            gender: {},
        }
    })
})