/*
Problem:
Given a row number (r) and column number (c),
return the element present at that position in Pascal's Triangle.

Formula:
Element = (r - 1)C(c - 1)

Time Complexity: O(c)
Space Complexity: O(1)
*/

function findElement(row, col) {
  // Convert to 0-based indexing
  let n = row - 1;
  let r = col - 1;

  let result = 1;

  // Calculate nCr efficiently
  for (let i = 0; i < r; i++) {
    result = (result * (n - i)) / (i + 1);
  }

  return result;
}

// Test Cases
console.log(findElement(5, 3)); // 6
console.log(findElement(6, 4)); // 10
console.log(findElement(1, 1)); // 1
console.log(findElement(4, 2)); // 3
