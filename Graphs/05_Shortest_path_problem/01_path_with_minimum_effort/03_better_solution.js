/*
Instead of directly finding the minimum effort, we check whether a particular effort is sufficient to reach the destination.

For example:
Can we reach destination with maximum effort 1? NO

Can we reach destination with maximum effort 2? YES

Can we reach destination with maximum effort 3? YES

Can we reach destination with maximum effort 4? YES


Notice something?

If we can reach the destination with effort 2, we can also reach it with effort 3, 4, and so on.
This is a monotonic property, which allows us to apply Binary Search.


Algorithm
1. Initialize low = 0.
2. Find the maximum adjacent height difference and store it in high.
3. Calculate mid = Math.floor((low + high) / 2).
4. Run BFS to check whether the destination is reachable with maximum allowed effort mid.
5. During BFS, only visit a neighboring cell if its height difference is <= mid.
6. If the destination is reachable, search for a smaller effort: high = mid.
7. Otherwise, search for a larger effort: low = mid + 1.
8. Return low.
*/

function minimumEffortPath(heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  // Four possible directions
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Binary search range
  let low = 0;
  let high = 0;

  // Find maximum adjacent height difference
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Check downward neighbor
      if (r + 1 < rows) {
        high = Math.max(high, Math.abs(heights[r][c] - heights[r + 1][c]));
      }

      // Check right neighbor
      if (c + 1 < cols) {
        high = Math.max(high, Math.abs(heights[r][c] - heights[r][c + 1]));
      }
    }
  }

  // Check whether destination is reachable
  // when maximum allowed effort is maxEffort
  function canReach(maxEffort) {
    // Track visited cells
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // BFS queue
    const queue = [[0, 0]];

    // Use a pointer instead of shift() for O(1) dequeue
    let front = 0;

    visited[0][0] = true;

    while (front < queue.length) {
      const [row, col] = queue[front++];

      // Destination reached
      if (row === rows - 1 && col === cols - 1) {
        return true;
      }

      // Explore four directions
      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;

        // Check boundaries and visited status
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
          // Calculate height difference
          const diff = Math.abs(heights[row][col] - heights[nr][nc]);

          // Move only if difference is within allowed effort
          if (diff <= maxEffort) {
            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }
      }
    }

    // Destination is not reachable
    return false;
  }

  // Binary Search
  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    // Check whether current effort is sufficient
    if (canReach(mid)) {
      // Try to find a smaller effort
      high = mid;
    } else {
      // Current effort is insufficient
      low = mid + 1;
    }
  }

  return low;
}

// Example
const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];

console.log(minimumEffortPath(heights)); // 2
