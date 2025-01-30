interface GraphInterface {
  numberOfNodes: number;
  adjacentList: Object;
  addVertex(node: string): void;
  addEdge(number1: string, number2: string): void;
  showConnection(): void;
}

class Graph implements GraphInterface {
  numberOfNodes: number;
  adjacentList: Object;
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node: string): void {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(number1: string, number2: string): void {
    this.adjacentList[number1].push(number2);
    if (
      this.adjacentList[number2] &&
      !this.adjacentList[number2].includes(number1)
    ) {
      this.adjacentList[number2].push(number1);
    }
  }
  showConnection(): void {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnection = this.adjacentList[node];
      let connections = "";
      let vertex: number;
      for (vertex of nodeConnection) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

export default Graph;
