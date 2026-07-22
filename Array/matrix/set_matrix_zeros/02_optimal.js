/*
Instead of creating two extra arrays, use the first row and first column of the matrix as marker arrays.

First row stores which columns should become zero.
First column stores which rows should become zero.

Since matrix[0][0] belongs to both the first row and first column, use an extra variable (firstColumnHasZero) to remember whether the first column needs to be zeroed.
*/

/*
| Case    | Time   | Space |
| ------- | ------ | ----- |
| Best    | O(M×N) | O(1)  |
| Average | O(M×N) | O(1)  |
| Worst   | O(M×N) | O(1)  |
*/

function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Tracks whether the first column should be zero.
  let firstColumnHasZero = false;

  // Step 1: Mark rows and columns.
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColumnHasZero = true;
    }

    // First row and first column act as markers.
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; // Mark row
        matrix[0][col] = 0; // Mark column
      }
    }
  }

  // Step 2: Update remaining cells.
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // Step 3: Update first row.
  if (matrix[0][0] === 0) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // Step 4: Update first column.
  if (firstColumnHasZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);
