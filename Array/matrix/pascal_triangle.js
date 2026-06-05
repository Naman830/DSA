/*
One-Line Memory Trick

Type 1 (Find Element)
→ (row-1)C(col-1)

Type 2 (Nth Row)
→ Generate combinations sequentially

Type 3 (Entire Triangle)
→ Generate every row using Type 2
*/

/*
Almost every Pascal Triangle question is secretly based on nCr (Combination Formula).

The key formula is:
nCr = n!/r!(n-r)!
	​
But in interviews, we usually avoid factorials because they are expensive.

First Understand Pascal Triangle
Row 0            1

Row 1          1   1

Row 2        1   2   1

Row 3      1   3   3   1

Row 4    1   4   6   4   1

Row 5  1   5  10  10  5   1

Notice:
Row 4 = 1 4 6 4 1

1  = 4C0
4  = 4C1
6  = 4C2
4  = 4C3
1  = 4C4

So:
Every element in Pascal Triangle = nCr

Interview Pattern
There are 3 standard questions:

Type 1
Given row and column, find the element.

Type 2
Print the nth row.

Type 3
Print the entire triangle.
*/

// =================================================================================================
// =================================================================================================
// =================================================================================================
// 1. Given Row and Column, Find Element
/*
Given:
row = 5
col = 3
Find the element.

Pascal Triangle follows:
element = (row-1)C(col-1)

Optimal Solution
Instead of factorial:
nCr = n!/(r!(n-r)!)

use multiplication.
Formula:
nCr = n/r * (n-1)/(r-1) * ...

4C2 = (4×3)/(2×1)
Ans= 6
*/

// Time  : O(col) & Space : O(1)

// Function to calculate nCr efficiently
function nCr(n, r) {
  // Stores final answer
  let result = 1;

  // Calculate:
  // nCr = (n * (n-1) * (n-2) ...) / (r * (r-1) ...)
  for (let i = 0; i < r; i++) {
    // Multiply numerator part
    result = result * (n - i);

    // Divide denominator part
    result = result / (i + 1);
  }

  return result;
}

// Find element at a specific row and column
function findElement(row, col) {
  // Pascal Triangle follows:
  // element = (row-1)C(col-1)
  return nCr(row - 1, col - 1);
}

console.log(findElement(5, 3)); // 6

// =================================================================================================
// =================================================================================================
// =================================================================================================

// 2. Print Nth Row
/*
given: n = 5
Print: 1 4 6 4 1

Brute Force
For every position:
4C0
4C1
4C2
4C3
4C4

Compute nCr each time.
Complexity: O(n²)
Not optimal.

Better Observation
Suppose we already know:
4C0 = 1

Next element:
4C1

can be derived from previous.
Formula:
next = current * (n-r)/(r+1)

This generates the row sequentially.
Example

Row:
n = 5

Actual combination row:
4C0
4C1
4C2
4C3
4C4
*/

// TC: O(n) & SC: O(n)

function printNthRow(n) {
  // Stores complete row
  const row = [];

  // First element of every row is always 1
  let value = 1;

  row.push(value);

  // Generate remaining elements
  for (let col = 1; col < n; col++) {
    /*
        Formula:

        nextElement =
        currentElement * (n - col) / col

        Example:
        4C1 -> 4C2

        4 * 3 / 2 = 6
        */

    value = value * (n - col);
    value = value / col;

    row.push(value);
  }

  return row;
}

console.log(printNthRow(5));

// =================================================================================================
// =================================================================================================
// =================================================================================================

// 3. Print Entire Pascal Triangle
/*
Given:
n = 5

Output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

Brute Force
For every row:
For every column:

nCr(row,col)

Complexity: O(n³)

because nCr itself takes O(n).

Better Solution
Use previous row.

Formula:
triangle[i][j]
=
triangle[i-1][j-1]
+
triangle[i-1][j]
*/

// Optimal Solution (Most Popular)
// Generate each row using the efficient nth-row method.
// TC: O(n²) & SC: O(n²)
// Generates a single row of Pascal Triangle

function generateRow(rowNumber) {
  const row = [];

  // First element is always 1
  let value = 1;

  row.push(value);

  // Generate remaining elements using previous element
  for (let col = 1; col < rowNumber; col++) {
    value = value * (rowNumber - col);
    value = value / col;

    row.push(value);
  }

  return row;
}
function pascalTriangle(n) {
  // Stores complete triangle
  const triangle = [];

  // Generate each row one by one
  for (let row = 1; row <= n; row++) {
    // Create current row
    const currentRow = generateRow(row);

    // Add row into final triangle
    triangle.push(currentRow);
  }

  return triangle;
}

console.log(pascalTriangle(5));
