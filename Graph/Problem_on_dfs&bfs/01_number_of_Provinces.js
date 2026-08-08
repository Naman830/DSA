/*
EXPLANATION:-

You are given n cities and an n × n matrix isConnected.

1. isConnected[i][j] = 1 → city i and city j are directly connected.
2. isConnected[i][j] = 0 → they are not directly connected.

A province is a group of cities connected directly or indirectly.

example:-
1 --- 2      3 --- 4
      |
      5

Province 1 → {1, 2, 5}
Province 2 → {3, 4}
*/

/*
1. Key Observations
This is a Graph Traversal problem.
Each city is a node.
A connection between two cities is an edge.
We need to count the number of connected components.
We can solve it using DFS or BFS.
*/

// Time Complexity = O(n²) && Space Complexity = O(n)

// 1. Optimal Approach — DFS

function findCircleNum(isConnected) {
  const n = isConnected.length;

  // Keep track of cities that have already been visited.
  const visited = new Array(n).fill(false);

  let provinces = 0;

  // DFS visits all cities belonging to the same province.
  function dfs(city) {
    visited[city] = true;

    // Check every city to find its connected cities.
    for (let nextCity = 0; nextCity < n; nextCity++) {
      if (isConnected[city][nextCity] === 1 && !visited[nextCity]) {
        dfs(nextCity);
      }
    }
  }

  // Every unvisited city represents a new province.
  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      provinces++;

      // Visit all cities connected to this province.
      dfs(city);
    }
  }

  return provinces;
}

// Test Case 1
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
// Output: 2

// Test Case 2
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
// Output: 3

// Test Case 3
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ]),
);
// Output: 1
