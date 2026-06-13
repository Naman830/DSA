// This is almost the same as Rotated Sorted Array - I.
/*
Why Does the Previous Logic Fail
In Part I we used:
nums[low] <= nums[mid]
to determine that the left half is sorted.

Consider:
nums = [1,1,1,0,1]
low      mid      high
 ↓        ↓        ↓
[1, 1, 1, 0, 1]

Here:
nums[low] === nums[mid] && nums[mid] === nums[high]

We cannot determine:
whether the left half is sorted
whether the right half is sorted

because all three values are equal.

The duplicate values hide the rotation point.

SOLUTION 
So we simply shrink the search space:

low++;
high--;

This removes duplicates from both ends.
*/

// TC: O(log n) || Worst (many duplicates) O(n) & SC: O(1)

// CODE IS FULLY SIMILAR TO PREVIOUS CODE
function search(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    // Target found
    if (nums[mid] === target) {
      return true;
    }

    // Cannot determine sorted half due to duplicates [THIS IS ADDED ONLY]
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
      continue;
    }

    // Left half sorted
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // Right half sorted
    else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
}
console.log(search([1, 1, 0, 1, 1, 1, 1], 0));
