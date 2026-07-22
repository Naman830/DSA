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

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================

// 2. Better Solution
/*
In previous we are MARKING zeros and then converting it to zeros

STEP 1 :- In this we create a ONE row and column outside of matrix and set it to 0 = No zero yet in matrix

STEP 2 :- Then Iterate in matrix and find zero when we find zero simply row and column 0 = 1 which means marked

STEP 3 :- All marked row and column will become zeros at end

TC: O(m × n)
SC: O(m + n) [But it take extra space due to creating row and column for mark]
*/

/*
Pseudocode



again traverse matrix
set 0 where needed
*/

function setZeroesBetter(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // rows = [];
  // cols = [];
  // initally they are false
  const rows = new Array(m).fill(false);
  const cols = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    // FIND Zeros and mark it to true
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  // the mark true become zeros
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}
