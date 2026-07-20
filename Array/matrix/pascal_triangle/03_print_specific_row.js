// Pascal's Triangle II (LeetCode 119)
// In Pascal's Triangle II, you only need to return one specific row.

/*
Input: rowIndex = 3

Pascal Triangle:

        1
      1   1
    1   2   1
  1   3   3   1

Output:
[1, 3, 3, 1]

Here, rowIndex = 3, so we return only the 4th row (0-based indexing).


Key Observations
Rows are 0-indexed.
Every row starts and ends with 1.

Middle elements are formed by:
current[j] = previous[j-1] + previous[j]

We only need one row, not the whole triangle.
*/

// 1. Brute Force (Generate Entire Triangle)
// TC: O(n²) && SC: O(n²)

// Approach 2 — Better (Store Only Previous Row)
/*
Instead of storing the entire triangle, keep only the previous row.

Each new row is built from the previous row.

Pseudocode
previous = []

repeat until rowIndex
    create current row
    fill using previous row
    previous = current

return previous
*/
