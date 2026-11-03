/*
let:-
V = rows × cols (total cells).
Every cell can have at most 4 neighbors.
Because we use backtracking, the same cell can be visited in different paths.

Complexity	Analysis
Time	O(4 x 3V - 1) wrost case
Space	O(V)
*/

function minimumEffortPath(heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  // Track visited cells in the current path
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // Store the minimum effort among all possible paths
  let minEffort = Infinity;

  // Four possible directions: up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(row, col, effort) {
    // If destination is reached, update minimum effort
    if (row === rows - 1 && col === cols - 1) {
      minEffort = Math.min(minEffort, effort);
      return;
    }

    // Mark current cell as visited
    visited[row][col] = true;

    // Explore all four directions
    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;

      // Check boundaries and avoid revisiting cells
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
        // Calculate difference between adjacent cells
        const diff = Math.abs(heights[row][col] - heights[nr][nc]);

        // Maximum difference encountered in this path
        const newEffort = Math.max(effort, diff);

        // Prune paths that cannot improve the answer
        if (newEffort < minEffort) {
          dfs(nr, nc, newEffort);
        }
      }
    }

    // Backtrack: unmark current cell
    visited[row][col] = false;
  }

  // Start DFS from top-left with effort 0
  dfs(0, 0, 0);

  return minEffort;
}

// Example
const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];

console.log(minimumEffortPath(heights)); // 2
