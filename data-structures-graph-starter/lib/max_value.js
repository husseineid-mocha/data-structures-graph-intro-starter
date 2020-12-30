function maxValue(node, visited = new Set()) {
  visited.add(node.val);

  node.neighbors.forEach((neighbor) => {
    if (visited.has(neighbor.val)) return;
    maxValue(neighbor, visited);
  });
  let res = Array.from(visited);
  return Math.max(...res);
}

// if visisted has a node we need to return SOMETHING
// add node to visited
//for the neighbors of node we want to

module.exports = {
  maxValue,
};
