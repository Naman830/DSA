/*
You are given a matrix where:

Every row is sorted in increasing order.
Rows are NOT sorted with respect to each other.

Example:

[
 [1, 3, 5],
 [2, 6, 9],
 [3, 6, 9]
]

Notice:

Row 1 : 1 3 5   ✓ sorted
Row 2 : 2 6 9   ✓ sorted
Row 3 : 3 6 9   ✓ sorted

But columns are NOT necessarily sorted.

Median is the middle element.
*/

/*
Brute Force 

Idea
Put every element of the matrix into a single array.
Sort the array.
Return the middle element.
Create an empty array nums

PSEUDO CODE
For every row
    For every column
        Push matrix[row][col] into nums

Sort nums

medianIndex = floor(nums.length / 2)

Return nums[medianIndex]


Time Complexity
Collect elements : O(R × C)
Sorting         : O((R × C) log(R × C))
Total           : O((R × C) log(R × C))

Space           : O(R × C)
*/

// 1. Binary Search Solution (Optimal)
/*
The biggest mistake most people make is trying to binary search on the matrix indices.
We don't binary search on rows or columns.
Instead, we binary search on the value.
*/

/**
 * Returns the index of the first element > target.
 *
 * Since the row is sorted,
 * this index is also equal to the number of elements <= target.
 */
/**
 * Returns the index of the first element > target.
 *
 * Since the row is sorted,
 * this index is also equal to the number of elements <= target.
 */

function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  // Assume every element is <= target
  let ans = arr.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Found a bigger element
    if (arr[mid] > target) {
      ans = mid; // Store its index
      high = mid - 1; // Look for an even earlier one
    }
    // Current element is <= target
    else {
      low = mid + 1;
    }
  }

  // Number of elements <= target
  return ans;
}

/**
 * Returns the median of a row-wise sorted matrix.
 */

function median(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // -----------------------------------
  // Step 1:
  // Find the smallest and largest values
  // in the matrix.
  //
  // Since every row is sorted,
  // first element = row minimum
  // last element = row maximum
  // -----------------------------------

  let low = Infinity;
  let high = -Infinity;

  for (let row = 0; row < rows; row++) {
    low = Math.min(low, matrix[row][0]);
    high = Math.max(high, matrix[row][cols - 1]);
  }

  // Total elements that should come before (or equal)
  // to the median.
  const required = Math.floor((rows * cols) / 2);

  // -----------------------------------
  // Binary Search on VALUE
  // -----------------------------------

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let count = 0;

    // Count numbers <= mid
    for (let row = 0; row < rows; row++) {
      count += upperBound(matrix[row], mid);
    }

    // --------------------------------
    // Not enough numbers <= mid
    // Median must be larger
    // --------------------------------
    if (count <= required) {
      low = mid + 1;
    }

    // --------------------------------
    // Enough numbers <= mid
    // Try finding a smaller answer
    // --------------------------------
    else {
      high = mid - 1;
    }
  }

  // low is the smallest value
  // having more than half elements
  // smaller than or equal to it.
  return low;
}
const matrix = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];

console.log("Answer =", median(matrix));

/*
Time:
O(R × log(C) × log(Max-Min))

Space:
O(1)
*/
