/*
DFS = Depth First Search

DFS is a graph traversal technique where we:
Go as deep as possible along one path, then backtrack and explore the next path.
*/

/*
    1
   / \
  2   3
 / \
4   5

Starting from [1]: 1 → 2 → 4 → 5 → 3

RESCURSION FLOW
1 → 2 → 4
        ↑
      dead end
        ↓
      backtrack
        ↓
1 → 2 → 5
        ↑
      dead end
        ↓
      backtrack
        ↓
1 → 3

Key observations
Use a stack to implement DFS.
A recursive DFS uses the call stack internally.
Use a visited array/set to avoid visiting a node multiple times.
For an undirected graph, every edge appears in both adjacency lists.
*/

// 1. Recursive DFS — Optimal & Common
/*
1. Visit the current node.
2. Mark it as visited.
3. Visit every unvisited neighbor recursively.
*/

const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1],
  4: [2],
  5: [2],
};

function dfs(graph, start) {
  const visited = new Set();
  const result = [];

  function traverse(node) {
    // Mark the current node as visited
    visited.add(node);

    // Add the node to the traversal result
    result.push(node);

    // Visit all unvisited neighbors
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }

  // Start DFS from the given node
  traverse(start);

  return result;
}

console.log(dfs(graph, 1));
// Output: [1, 2, 4, 5, 3]

/*
Time Complexity: O(V + E)
Space Complexity: O(V)
*/
