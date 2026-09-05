function solveSudoku(board) {
  // Sets to quickly check whether a number already exists.
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  // Fill the Sets with the numbers already present.
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c];

      if (value === ".") continue;

      // Every cell belongs to one of the 9 boxes.
      // We calculate which box the current cell belongs to.
      // row = 0, col = 0 → box 0 || row = 1, col = 4 → box 1 || ------ box 2
      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      rows[r].add(value);
      cols[c].add(value);
      boxes[box].add(value);
    }
  }

  function backtrack() {
    // Find an empty cell.
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] !== ".") continue;

        const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        // Try numbers 1 to 9.
        for (let num = 1; num <= 9; num++) {
          const value = String(num);

          // Check row, column and box.
          if (
            rows[r].has(value) ||
            cols[c].has(value) ||
            boxes[box].has(value)
          ) {
            continue;
          }

          // CHOOSE
          board[r][c] = value;
          rows[r].add(value);
          cols[c].add(value);
          boxes[box].add(value);

          // EXPLORE
          if (backtrack()) {
            return true;
          }

          // UNDO → BACKTRACK
          board[r][c] = ".";
          rows[r].delete(value);
          cols[c].delete(value);
          boxes[box].delete(value);
        }

        // No number worked for this cell.
        return false;
      }
    }

    // No empty cells → Sudoku solved.
    return true;
  }

  backtrack();
}

// Test Case
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);

console.log(board);
