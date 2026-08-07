/*
A Connected Component is a group of vertices (nodes) in an undirected graph where:

Every node can reach every other node in the group.
There is no connection to nodes in another group.

Think of it as separate islands inside one graph.

Example:-

      0
     / \
    1---2

      3
      |
      4

      5

Components are:
{0,1,2}
{3,4}
{5}

Answer = 3 Connected Components
*/

/*
.Key Observations
Works for Undirected Graphs.
Every node belongs to exactly one connected component.
If the graph has only one connected component, the graph is Connected.
If it has more than one, it is Disconnected.

Simple Algorithm or way
1. Keep a visited array.
2. Loop through every node.

3. If a node is not visited:
    Start DFS or BFS from it.
    Mark every reachable node.
    Increase the component count.
Every new DFS/BFS means we found a new connected component.
*/

function dfs(node, graph, visited) {
  visited[node] = true;

  // Visit all unvisited neighbors
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, graph, visited);
    }
  }
}

function countConnectedComponents(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);

  let components = 0;

  // Check every node
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited);
      components++;
    }
  }

  return components;
}

// Example Graph
const graph = [
  [1], // 0
  [0], // 1
  [3], // 2
  [2], // 3
  [], // 4
];

console.log(countConnectedComponents(graph)); // 3
