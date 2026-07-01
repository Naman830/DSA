/*
=========================================================

Observation:
- Every row is sorted (Left → Right)
- Every column is sorted (Top → Bottom)
- Matrix CANNOT be treated as a single sorted array.

Example:
1  4  7 11
2  5  8 12
3  6  9 16
10 13 14 17

Why Top-Right?
- Left  = Smaller values
- Down  = Larger values

Algorithm:
1. Start at top-right.
2. If current == target → return true.
3. If current > target → move LEFT.
4. If current < target → move DOWN.
5. Repeat until out of bounds.

Why?
- current > target:
  Everything below is even bigger.
  So remove the entire column.

- current < target:
  Everything left is even smaller.
  So remove the entire row.

=========================================================
*/
// 1. Optimal Binary Search
/**
 * Search in a 2D Matrix II
 * Time: O(rows + cols)
 * Space: O(1)
 */

function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Start from the top-right corner
  let row = 0;
  let col = cols - 1;

  // Continue while we are inside the matrix
  while (row < rows && col >= 0) {
    // Current element
    const current = matrix[row][col];

    // Target found
    if (current === target) {
      return true;
    }

    // Current value is too large
    // Move left to get smaller values
    if (current > target) {
      col--;
    }
    // Current value is too small
    // Move down to get larger values
    else {
      row++;
    }
  }

  // Target not found
  return false;
}

// Example
const matrix = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17],
];

console.log(searchMatrix(matrix, 8)); // true
console.log(searchMatrix(matrix, 15)); // false

/*
Time: O(m + n)
Space: O(1)
*/
