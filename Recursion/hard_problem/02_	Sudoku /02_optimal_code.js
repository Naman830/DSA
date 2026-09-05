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
}
