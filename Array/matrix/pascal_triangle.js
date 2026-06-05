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

function printNthRow(n) {

}