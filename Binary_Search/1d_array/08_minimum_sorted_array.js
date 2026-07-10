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

/*
Find Minimum in Rotated Sorted Array

Time Complexity:
Best    : O(1)
Average : O(log n)
Worst   : O(log n)

Space Complexity:
O(1)
*/

function findMin(nums) {
  let low = 0;
  let high = nums.length - 1;

  // Store minimum found so far
  let ans = Infinity;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    // Entire search space is already sorted
    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }

    // Left half is sorted
    if (nums[low] <= nums[mid]) {
      // Smallest element in left half is nums[low]
      ans = Math.min(ans, nums[low]);

      // Search in right half
      low = mid + 1;
    }
    // Right half contains the rotation point
    else {
      // Mid itself can be the minimum
      ans = Math.min(ans, nums[mid]);

      // Search in left half including mid
      high = mid - 1;
    }
  }

  return ans;
}

// Test Cases
console.log(findMin([4, 5, 6, 7, 1, 2, 3])); // 1
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([11, 13, 15, 17])); // 11
console.log(findMin([2, 1])); // 1
console.log(findMin([1])); // 1

// for duplicate add this statemment
/*
// Duplicate case
    if (
      nums[low] === nums[mid] &&
      nums[mid] === nums[high]
    ) {
      ans = Math.min(ans, nums[mid]);

      low++;
      high--;
      continue;
    }
*/
