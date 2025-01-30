import NodeCustom from "./node";

type NodeOrNull<T> = NodeCustom<T> | null;

interface Tree<T> {
  insert(value: number): void;
  lookup(): NodeOrNull<T>;
  root: NodeOrNull<T>;
}

class BinarySearchTree implements Tree<number> {
  public root: NodeOrNull<number>;
  constructor() {
    this.root = null;
  }

  lookup(): NodeOrNull<number> {
    throw new Error("Method not implemented.");
  }

  insert(value: number): void {
    const newNode = new NodeCustom(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        return;
      }
    }
  }
}

export default BinarySearchTree;
