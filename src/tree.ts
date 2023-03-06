import { isArray } from "./type-guard";


/**
 * @description 给树的每个节点标注层级依赖关系
 */
export function makerTreeNodeDepth<T extends any[]>(
  tree: T,
  replaceFields = { children: "children" }
) {
  const { children } = replaceFields;

  const markerNode = (tree: any[], treePath: string[] = []) => {
    for (let index = 0; index < tree.length; index++) {
      const node = tree[index];
      const nodePath = [...treePath, `${index}`];
      node.__depthLevel = nodePath.join("-");
      if (isArray(node[children]) && node[children].length) {
        markerNode(node[children], node.__depthLevel.split("-"));
      }
    }
  };

  markerNode(tree);
}
