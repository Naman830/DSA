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
  // Convert to 0-based indexing for nCr formula
  const rowIndex = row - 1;
  const columnIndex = col - 1;

  // First value in every Pascal row is always 1
  let currentValue = 1;

  // Calculate nCr using the iterative formula
  for (let currentColumn = 0; currentColumn < columnIndex; currentColumn++) {
    currentValue =
      (currentValue * (rowIndex - currentColumn)) / (currentColumn + 1);
  }

  return currentValue;
}
// Test Cases
console.log(findElement(5, 3)); // 6
console.log(findElement(6, 4)); // 10
console.log(findElement(1, 1)); // 1
console.log(findElement(4, 2)); // 3
