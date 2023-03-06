import { isArray } from "./type-guard";

interface PrivateNode {
  __depthLevel?: string;
}

interface TreeNode extends PrivateNode {
  key: string | number;
  title: string;
  children?: TreeNode[];
}

/**
 * @description 给树的每个节点标注层级依赖关系
 */
export function makerTreeNodeDepth<T extends TreeNode[]>(tree: T) {
  const markerNode = (tree: TreeNode[], treePath: string[] = []) => {
    for (let index = 0; index < tree.length; index++) {
      const node = tree[index];
      const nodePath = [...treePath, `${index}`];
      node.__depthLevel = nodePath.join("-");
      if (isArray(node.children) && node.children.length) {
        markerNode(node.children, node.__depthLevel.split("-"));
      }
    }
  };

  markerNode(tree);
}

/**
 * @description 打平一棵树
 */
export function flattenTree<T extends TreeNode[]>(tree: T) {
  let flatResult: Omit<TreeNode, "children">[] = [];

  for (let idx = 0; idx < tree.length; idx++) {
    const treeNode = {
      ...tree[idx],
    };
    flatResult.push(treeNode);
    if (isArray(treeNode.children) && treeNode.children.length) {
      flatResult = flatResult.concat(flattenTree(treeNode.children));
      delete treeNode.children;
    }
  }

  return flatResult;
}
