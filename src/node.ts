type NodeOrNull<T> = NodeCustom<T> | null;

class NodeCustom<T> {
  #left: NodeOrNull<number>;
  #right: NodeOrNull<number>;

  constructor(public value: T) {
    this.#left = null;
    this.#right = null;
  }

  public get left(): NodeOrNull<number> {
    return this.#left;
  }

  public get right(): NodeOrNull<number> {
    return this.#right;
  }

  public set left(newValue: NodeOrNull<number>) {
    this.#left = newValue;
  }

  public set right(newValue: NodeOrNull<number>) {
    this.#right = newValue;
  }
}

export default NodeCustom;
