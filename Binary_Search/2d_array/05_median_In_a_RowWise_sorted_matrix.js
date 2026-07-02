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
