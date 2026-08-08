/*
The Rotten Oranges problem is a classic BFS (Breadth-First Search) problem on a matrix.

0 → Empty cell
1 → Fresh orange
2 → Rotten orange

1. Key Observations
We need the minimum time → BFS is ideal.
There can be multiple rotten oranges initially.
All rotten oranges spread simultaneously.
Therefore, put all rotten oranges into the queue initially.
Process the queue level by level → each level represents 1 minute.
At the end, if any fresh orange remains → return -1.

EXAMPLE:-

2 1 1           
1 1 0
0 1 1

After 1 minute:

2 2 1
2 1 0
0 1 1

After 2 minutes:

2 2 2
2 2 0
0 1 1
*/

// 1. Brute Force
/*
Scan entire matrix
Find fresh oranges next to rotten oranges
Make them rotten
Repeat

Time: O((m × n)²) in the worst case.
*/

// 2. Optimal Approach — Multi-Source BFS
/*
Why BFS?
Because BFS explores nodes based on their [distance] from the starting points.
Here: Distance = Time
*/

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [];
  let fresh = 0;

  // Add all rotten oranges to the queue.
  // Also count the total fresh oranges.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  let minute = 0;
  let front = 0;

  // Four possible directions: up, down, left, right
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (front < queue.length && fresh > 0) {
    // Current queue size represents one minute.
    const size = queue.length - front;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue[front++];

      // Check all 4 neighboring cells.
      for (const [dr, dc] of direction) {
        const nr = r + dr;
        const nc = c + dc;

        // Check boundaries and whether the orange is fresh.
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nc][nr] === 1
        ) {
          // Make the fresh orange rotten.
          grid[nr][nc] = 2;

          fresh--;

          // Add the newly rotten orange to the queue.
          queue.push([nr, nc]);
        }
      }
    }
    // One complete BFS level = one minute.
    minutes++;
  }

  // If fresh oranges are still left, they cannot be reached.
  return fresh === 0 ? minutes : -1;
}

// Test Case 1
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
// Output: 4

// Test Case 2
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
// Output: -1

// Test Case 3
console.log(orangesRotting([[0, 2]]));
// Output: 0
