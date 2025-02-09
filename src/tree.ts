import NodeCustom from "./node";

type NodeOrNull<T> = NodeCustom<T> | null;

interface Tree<T> {
  insert(value: number): void;
  lookup(value: number): NodeOrNull<T>;
  root: NodeOrNull<T>;
}

class BinarySearchTree implements Tree<number> {
  public root: NodeOrNull<number>;
  constructor() {
    this.root = null;
  }

  lookup(value: number): NodeOrNull<number> {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        if (!currentNode.right) {
          return null;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          return null;
        }
        currentNode = currentNode.left;
      }
    }
  }

  remove(value: number): void {
    if (!this.root) {
      return;
    }
    let currentNode = this.root;
    let parentNode: NodeOrNull<number> = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
        }
      } else {
        return;
      }
    }
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

  breadthFirstSearch(): number[] {
    let currentNode = this.root;
    const queue = [];
    const list: number[] = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
}

export default BinarySearchTree;
