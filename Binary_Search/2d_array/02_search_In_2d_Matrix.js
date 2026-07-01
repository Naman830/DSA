/*
===========================================
Search in a 2D Matrix - I (Binary Search)
===========================================

Observation:
- Every row is sorted.
- First element of each row > Last element of previous row.
- Therefore, the whole matrix behaves like ONE sorted array.

Example:
1  3  5  7
10 11 16 20
23 30 34 60

Equivalent:
[1,3,5,7,10,11,16,20,23,30,34,60]

--------------------------------------------------
Index Conversion
--------------------------------------------------
This is how we can convert our 1d index of mid to 2d index 

row = Math.floor(index / cols)
col = index % cols

Example:
index = 6, cols = 4

row = 6 / 4 = 1
col = 6 % 4 = 2

matrix[1][2] = 16
*/

/*
Brute Force

Idea
Check every element one by one.

Algorithm
for every row
    for every column
        if element == target
            return true

return false

Time: O(rows × cols)
Space: O(1)
*/

/*
Better Solution (Row-wise Binary Search)

Idea
Since every row is sorted:

Check if target can lie in the current row. check index[0] and last index if target lie bettwen it perform Binary Search on that row.

Algorithm
for every row

    if target is between first and last element

        Binary Search in that row

return false

Time: O(rows × log(cols))
Space: O(1)
*/

//OPTIMAL BINARY SEARCH SOLUTION
/**
 * Search a target in a sorted 2D matrix
 * Time Complexity: O(log(rows * cols))
 * Space Complexity: O(1)
 */
function searchMatrix(matrix, target) {
  // Number of rows
  const rows = matrix.length;

  // Number of columns
  const cols = matrix[0].length;

  // Binary search range
  let low = 0;
  let high = rows * cols - 1;

  while (low <= high) {
    // Find middle index
    const mid = Math.floor((low + high) / 2);

    // Convert 1D index into row and column
    const row = Math.floor(mid / cols);
    const col = mid % cols;

    // Current value
    const value = matrix[row][col];

    // Target found
    if (value === target) {
      return true;
    }

    // Search in the right half
    if (value < target) {
      low = mid + 1;
    }
    // Search in the left half
    else {
      high = mid - 1;
    }
  }

  // Target does not exist
  return false;
}

// Example
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(searchMatrix(matrix, 16)); // true
console.log(searchMatrix(matrix, 13)); // false

/*
| Complexity | Value                   |
| ---------- | ----------------------- |
| Time       | **O(log(rows × cols))** |
| Space      | **O(1)**                |

*/
