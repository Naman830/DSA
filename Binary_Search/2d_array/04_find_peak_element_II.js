/*
You are given a 2D mat.
You need to find any one Peak Element.

A cell is called a Peak if it is strictly greater than its 4 neighbours:
Top
Bottom
Left
Right

(Diagonal cells are NOT considered.)
If a neighbour does not exist (boundary), simply ignore it.

1   4   3
6   7   8
5   2   9
Is 9 a peak?

Check its neighbours
Top    = 8
Left   = 2
Right  = Doesn't exist
Bottom = Doesn't exist

Since
9 > 8
9 > 2

So yes, 9 is a Peak.

There may be multiple peaks you can return any one.
*/

/*
1. Brute Force ✅

Check every cell and compare it with its 4 neighbours.

Pseudo Code
for every row
    for every column

        if current > top
        and current > bottom
        and current > left
        and current > right

            return current position

Time Complexity: O(m × n)

Space Complexity: O(1)
*/

// 1. Binary Search Solution (Optimal)
// Compare only Left and Right.
// No need to compare Top and Bottom because:
// We already selected the largest element in that column, so Top and Bottom can never be larger.
/**
 * Find Peak Element II
 * Time  : O(rows * log(cols))
 * Space : O(1)
 */

function findPeakGrid(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  let low = 0;
  let high = cols - 1;

  // Binary Search on columns
  while (low <= high) {
    // Find middle column
    const mid = Math.floor((low + high) / 2);

    // -----------------------------
    // Find row having maximum value
    // in the middle column
    // -----------------------------
    let maxRow = 0;

    for (let row = 1; row < rows; row++) {
      if (mat[row][mid] > mat[maxRow][mid]) {
        maxRow = row;
      }
    }

    // Current element
    const current = mat[maxRow][mid];

    // Left neighbour
    const left = mid > 0 ? mat[maxRow][mid - 1] : -Infinity;

    // Right neighbour
    const right = mid < cols - 1 ? mat[maxRow][mid + 1] : -Infinity;

    // Peak found
    if (current > left && current > right) {
      return [maxRow, mid];
    }

    // Peak lies on left side
    if (left > current) {
      high = mid - 1;
    }
    // Peak lies on right side
    else {
      low = mid + 1;
    }
  }

  return [-1, -1];
}

// Example
const matrix = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

console.log(findPeakGrid(matrix)); // [1, 1]
