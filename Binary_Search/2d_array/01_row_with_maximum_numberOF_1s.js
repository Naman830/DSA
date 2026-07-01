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

/*
Time Complexity: O(n × m)
Space Complexity: O(1)
*/

// 2. Binary Search Solution
/*
Since every row is sorted,
0 0 0 1 1 1
If we know the first position of 1, then

Number of 1s = total columns - firstOneIndex

So the main task becomes:
Find the first occurrence of 1 in every row.

This is where Binary Search helps.

We can use Upper Bound, lower bound or first occurence to find 1s
*/

/**
 * Binary Search Solution
 * Time  : O(n × log m)
 * Space : O(1)
 */

// Returns the index of the first 1 in a sorted row
function firstOne(matrixRow) {
  let low = 0;
  let high = matrixRow.length - 1;

  // If no 1 exists, this value remains unchanged
  let answer = matrixRow.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (matrixRow[mid] === 1) {
      // Found a 1, store its position
      answer = mid;

      // Search further on the left
      high = mid - 1;
    } else {
      // Value is 0, so first 1 must be on the right
      low = mid + 1;
    }
  }

  return answer;
}

function rowWithMax1sBinary(matrix) {
  const cols = matrix[0].length;

  let maxOnes = 0;
  let answer = -1;

  // Process every row
  for (let i = 0; i < matrix.length; i++) {
    // Find first occurrence of 1
    const firstIndex = firstOne(matrix[i]);

    // Number of 1s in current row
    const ones = cols - firstIndex;

    // Update answer if current row has more 1s
    if (ones > maxOnes) {
      maxOnes = ones;
      answer = i;
    }
  }

  return answer;
}

console.log(rowWithMax1sBinary(matrix)); // 3

/*
Time Complexity: O(n * m)

Space Complexity;: O(1)
*/
