/*
You are given a binary matrix (contains only 0s and 1s).
Each row is sorted, meaning:

All 0s come first.
Then all 1s.

Example:

[
 [0,0,1,1],
 [0,1,1,1],
 [0,0,0,1],
 [1,1,1,1]
]

Find the index of the row having the maximum number of 1s.
If no row contains any 1, return -1.
*/

// Brute Force Solution
// Visit every element.
// Count how many 1s are present.
// Keep track of the row having the maximum count.

function rowWithMax1s(matrix) {
  let maxOnes = 0;
  let answer = -1;

  // Visit every row
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;

    // Count number of 1s in current row
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
    }

    // Update answer if current row has more 1s
    if (count > maxOnes) {
      maxOnes = count;
      answer = i;
    }
  }

  return answer;
}

// Example
const matrix = [
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];

console.log(rowWithMax1s(matrix)); // 3

/*
Time Complexity: O(n × m)
Space Complexity: O(1)
*/
