function ratInMaze(maze) {
  const n = maze.length;

  // Store all valid paths
  const result = [];

  // If start or destination is blocked, no path exists
  if (maze[0][0] === 0 || maze[n - 1][n - 1] === 0) {
    return result;
  }

  // visited[r][c] tells us whether we are already using this cell
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  /*
  --------------------------------------------------------
  DIRECTIONS
  --------------------------------------------------------
  Each direction contains:
  [row change, column change, direction letter]

  Down:
      row + 1
      col stays same

  Up:
      row - 1

  Right:
      col + 1

  Left:
      col - 1
  */

  const directions = [
    [1, 0, "D"], // Down
    [0, -1, "L"], // Left
    [0, 1, "R"], // Right
    [-1, 0, "U"], // Up
  ];

  function backtrack(row, col, path) {
    // If the cell is outside the maze, stop
    if (row < 0 || col < 0 || row >= n || col >= n) {
      return;
    }
    // Cannot move through blocked or already visited cells
    if (maze[row][col] === 0 || visited[row][col]) {
      return;
    }

    // We reached the destination
    if (row === n - 1 && col === n - 1) {
      result.push(path);
      return;
    }

    // Choose: mark this cell as part of our current path
    visited[row][col] = true;

    // Try all 4 possible directions
    for (const [dr, dc, direction] of directions) {
      backtrack(row + dr, col + dc, path + direction);
    }
    // Undo: allow this cell to be used in another path
    visited[row][col] = false;
  }

  backtrack(0, 0, "");
  return result;
}

// -------------------- TEST CASES --------------------

const maze1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

console.log(ratInMaze(maze1));
// Example output: [ 'DDRDRR', 'DRDDRR' ]

const maze2 = [
  [1, 0],
  [0, 1],
];

console.log(ratInMaze(maze2));
// Output: []

const maze3 = [
  [1, 1],
  [1, 1],
];

console.log(ratInMaze(maze3));
// Output: [ 'DR', 'RD' ]
