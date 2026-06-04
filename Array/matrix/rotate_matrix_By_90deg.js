/*
Given an n × n matrix, rotate it 90 degrees clockwise in-place.

Input:
1 2 3
4 5 6
7 8 9

Output:
7 4 1
8 5 2
9 6 3

1 → moves to top-right
2 → moves to middle-right
3 → moves to bottom-right

Most interviewers expect:
In-place rotation
No extra matrix
*/

// 1. Brute Force Solution
// Create a new matrix.

/*
Pseudocode
create result matrix

for i = 0 to n-1
    for j = 0 to n-1
        result[j][n-1-i] = matrix[i][j]
*/

// Time: O(N²)  Space: O(N²)

function rotateBrute(matrix) {
  const n = matrix.length;

  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

console.log(rotateBrute([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));


// 2. Optimal Solution
/*
Matrix Transformation
Transpose + Reverse Rows

Example:
1 2 3
4 5 6
7 8 9

After transpose:
1 4 7
2 5 8
3 6 9

Step 2: Reverse Every Row
1 4 7 → 7 4 1
2 5 8 → 8 5 2
3 6 9 → 9 6 3
*/

/*
Pseudocode
transpose matrix

for each row
    reverse row
*/