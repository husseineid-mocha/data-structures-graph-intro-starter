function numRegions(graph) {
  let count = 0;
  let visited = new Set();
  for (let key in graph) {
    if (!visited.has(key)) {
      _dsearch(graph, key, visited);
      count++;
    }
  }
  return count;
}

function _dsearch(graph, node, visited) {
  if (visited.has(node)) return;
  else visited.add(node);

  graph[node].forEach((neighbor) => {
    _dsearch(graph, neighbor, visited);
  });
}

module.exports = {
  numRegions,
};
