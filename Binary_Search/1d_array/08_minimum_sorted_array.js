// Given a sorted array that has been rotated at some pivot, find the minimum element.
/*
Input:
Rotated sorted array
No duplicate elements (for this version)

Output:
Minimum element

A rotated sorted array always contains two sorted halves.
Example:
[4,5,6,7,1,2,3]

Left Sorted Part  : [4,5,6,7]
Right Sorted Part : [1,2,3]

The minimum element is exactly where the rotation happened.
So whenever we find a completely sorted range, we can update our answer and stop searching that range.
*/

function findMin(nums) {
  let low = 0;
  let high = nums.length - 1;

  // Store minimum found so far
  let ans = Infinity;

  while (low <= high) {
    // Calculate middle index
    const mid = low + Math.floor((high - low) / 2);

    // If current search space is already sorted,
    // nums[low] is the minimum in this range.
    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }

    // Left half is sorted
    if (nums[low] <= nums[mid]) {
      // Minimum of this sorted half is nums[low]
      ans = Math.min(ans, nums[low]);

      // Search in right half
      low = mid + 1;
    }
    // Right half is sorted
    else {
      // nums[mid] is the smallest in this sorted part
      ans = Math.min(ans, nums[mid]);

      // Search in left half
      high = mid - 1;
    }
  }

  return ans;
}

console.log(findMin([4, 5, 6, 7, 1, 2, 3]));
