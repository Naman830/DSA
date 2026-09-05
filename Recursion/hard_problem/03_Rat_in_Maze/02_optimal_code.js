function ratInMaze(maze) {
  const n = maze.length;
  const result = [];

  // If the starting cell is blocked,
  // the rat cannot even start.
  if (maze[0][0] === 0) {
    return result;
  }

  // If the destination is blocked,
  // the rat can never reach the destination.
  if (maze[n - 1][n - 1] === 0) {
    return result;
  }

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
}
