/*
Problem: Given an m x n matrix, if an element is 0, set its entire row and column to 0. The operation must be done in-place.

Input:
1 1 1
1 0 1
1 1 1

Output:
1 0 1
0 0 0
1 0 1

Keep in Mind
1. First identify rows/columns that should become zero.
2. Then update the matrix.
*/

// 1. Brute Force Solution
/*
When we find a zero:
Mark its row and column with a special value (say -Infinity)
Later convert all markers to 0
*/

/*
Pseudocode

for each cell
    if cell == 0
        mark row
        mark column

convert all markers to 0
*/

// TC: O(n3) or O((mn)(m+n)) & SC: O(1)

function setZeroesBrute(matrix) {
  const MARK = -Infinity;
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        for (let col = 0; col < n; col++) {
          if (matrix[i][col] !== 0) matrix[i][col] = MARK;
        }

        for (let row = 0; row < m; row++) {
          if (matrix[row][j] !== 0) matrix[row][j] = MARK;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === MARK) matrix[i][j] = 0;
    }
  }

  return matrix;
}

console.log(
  setZeroesBrute([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);

// 2. Better Solution
/*
We only need to know:

Which rows contain a zero
Which columns contain a zero
*/

/*
Pseudocode

rows = []
cols = []

find all zeros
mark rows and cols

again traverse matrix
set 0 where needed
*/


