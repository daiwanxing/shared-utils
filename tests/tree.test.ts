import { makerTreeNodeDepth, flattenTree } from "../src/tree";
import { describe, it } from "vitest";

describe("test tree utils", () => {
  it("make a symbol to tree", ({}) => {
    const treeData = [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            children: [
              { title: "leaf", key: "0-0-0-0" },
              {
                title: "leaf",
                key: "0-0-0-1",
              },
              { title: "leaf", key: "0-0-0-2" },
            ],
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [{ title: "leaf", key: "0-0-1-0" }],
          },
          {
            title: "parent 1-2",
            key: "0-0-2",
            children: [
              { title: "leaf 1", key: "0-0-2-0" },
              {
                title: "leaf 2",
                key: "0-0-2-1",
              },
            ],
          },
        ],
      },
      {
        title: "parent 2",
        key: "0-1",
        children: [
          {
            title: "parent 2-0",
            key: "0-1-0",
            children: [
              { title: "leaf", key: "0-1-0-0" },
              { title: "leaf", key: "0-1-0-1" },
            ],
          },
        ],
      },
    ];

    makerTreeNodeDepth(treeData);
    console.log(treeData);
  });

  it("flat a tree", () => {
    const treeData = [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            children: [
              { title: "leaf", key: "0-0-0-0" },
              {
                title: "leaf",
                key: "0-0-0-1",
              },
              { title: "leaf", key: "0-0-0-2" },
            ],
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [{ title: "leaf", key: "0-0-1-0" }],
          },
          {
            title: "parent 1-2",
            key: "0-0-2",
            children: [
              { title: "leaf 1", key: "0-0-2-0" },
              {
                title: "leaf 2",
                key: "0-0-2-1",
              },
            ],
          },
        ],
      },
      {
        title: "parent 2",
        key: "0-1",
        children: [
          {
            title: "parent 2-0",
            key: "0-1-0",
            children: [
              { title: "leaf", key: "0-1-0-0" },
              { title: "leaf", key: "0-1-0-1" },
            ],
          },
        ],
      },
    ];

    
    console.log(flattenTree(treeData), treeData);
  });
});
