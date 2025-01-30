import NodeCustom from "./node";

type NodeOrNull<T> = NodeCustom<T> | null;
function traverse<T>(node: NodeOrNull<T>) {
  const treeValue = {
    left: null,
    right: null,
    value: node.value,
  };
  treeValue.left = node.left === null ? null : traverse(node.left);
  treeValue.right = node.right === null ? null : traverse(node.right);
  return treeValue;
}

export default traverse;
