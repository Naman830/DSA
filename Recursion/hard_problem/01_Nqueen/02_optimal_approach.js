function solveNQueens(n) {
  const result = [];

  // Create an empty N x N board
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  // Store columns that already contain a queen
  const columns = new Set();

  // Store diagonals using:
  // diagonal 1 → row - col
  // diagonal 2 → row + col
  const diagonal1 = new Set();
  const diagonal2 = new Set();

  // Try placing a queen in the given row
  function backtrack(row) {
    // All rows are completed
    if (row === n) {
      // Convert each row from array to string
      result.push(board.map((row) => row.join("")));

      return;
    }

    // Try every column in the current row
    for (let col = 0; col < n; col++) {
      // If column already has a queen → skip
      if (columns.has(col)) continue;

      // If left/right diagonal has a queen → skip
      if (diagonal1.has(row - col)) continue;
      if (diagonal2.has(row + col)) continue;

      // =========================
      // CHOOSE → Place the queen
      // =========================

      board[row][col] = "Q";

      columns.add(col);
      diagonal1.add(row - col);
      diagonal2.add(row + col);

      // =========================
      // EXPLORE → Go to next row
      // =========================

      backtrack(row + 1);

      // =========================
      // UNDO → Backtrack
      // =========================

      board[row][col] = ".";

      columns.delete(col);
      diagonal1.delete(row - col);
      diagonal2.delete(row + col);
    }
  }

  // Start from row 0
  backtrack(0);

  return result;
}

// =========================
// TEST CASES
// =========================

console.log("N = 1");
console.log(solveNQueens(1));

console.log("\nN = 4");
console.log(solveNQueens(4));

console.log("\nN = 5");
console.log(solveNQueens(5));
