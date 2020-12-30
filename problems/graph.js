class Graph {
  constructor() {
    this.adjList = new Object();
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Array();
    } else return;
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    for (let i = 0; i < edges.length; i++) {
      let curEdge = edges[i];
      //   this.addVertex(curEdge[0]);
      this.addEdges(curEdge[0], curEdge[1]);
    }

    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let visited = new Set();
    let queue = [startingVertex];

    while (queue.length) {
      let cur = queue.shift();
      if (visited.has(cur)) continue;
      visited.add(cur);
      this.adjList[cur].forEach((neighbor) => {
        queue.push(neighbor);
      });
    }
    return Array.from(visited);
  }

  depthFirstTraversalIterative(startingVertex) {
    let visited = new Set();
    let stack = [startingVertex];

    while (stack.length) {
      let cur = stack.pop();
      if (visited.has(cur)) continue;
      visited.add(cur);
      this.adjList[cur].forEach((neighbor) => {
        stack.push(neighbor);
      });
    }
    return Array.from(visited);
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (visited.has(startingVertex)) {
      return;
    } else {
      visited.add(startingVertex);
      this.adjList[startingVertex].forEach((neighbor) => {
        this.depthFirstTraversalRecursive(neighbor, visited);
      });
      return Array.from(visited);
    }
  }
}

module.exports = {
  Graph,
};
