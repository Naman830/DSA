/*
    LeetCode 118. Pascal's Triangle

    Problem:
    Given an integer numRows, return the first numRows
    of Pascal's Triangle.

    Approach:
    1. Create an empty array to store all rows.
    2. Generate one row at a time.
    3. First and last element of every row is always 1.
    4. Middle elements are calculated using:
            previousRow[j - 1] + previousRow[j]
    5. Store each row in the final answer.
*/

function generate(numRows) {
  // Stores the complete Pascal's Triangle
  const triangle = [];

  // Generate each row
  for (let i = 0; i < numRows; i++) {
    // Current row
    const row = [];

    // Every row contains (i + 1) elements
    for (let j = 0; j <= i; j++) {
      // First and last element are always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // Middle element = sum of two elements above it
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    // Store current row
    triangle.push(row);
  }

  // Return complete Pascal's Triangle
  return triangle;
}

// -------------------- Test Cases --------------------

console.log(generate(1));
// [[1]]

console.log(generate(5));
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1]
// ]

console.log(generate(6));
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1],
//   [1,5,10,10,5,1]
// ]

/*
Time Complexity
Best Case: O(n²)
Average Case: O(n²)
Worst Case: O(n²)

Space Complexity
O(n²) (for storing the entire Pascal's Triangle)
*/
