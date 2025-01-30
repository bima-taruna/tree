class NodeCustom<T> {
  #left: NodeCustom<T> | null;
  #right: NodeCustom<T> | null;

  constructor(public value: T) {
    this.#left = null;
    this.#right = null;
  }

  public get left(): NodeCustom<T> | null {
    return this.#left;
  }

  public get right(): NodeCustom<T> | null {
    return this.#right;
  }

  public set left(newValue: NodeCustom<T> | null) {
    this.#left = newValue;
  }

  public set right(newValue: NodeCustom<T> | null) {
    this.#right = newValue;
  }
}

export default NodeCustom;
