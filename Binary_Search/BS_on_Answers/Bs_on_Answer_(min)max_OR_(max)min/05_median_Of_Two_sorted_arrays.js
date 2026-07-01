/*
What is Median? 
Median is the middle element of a sorted array.

You are given two sorted arrays.
nums1 = [1,3]
nums2 = [2]

Merge them mentally (don't actually merge):
[1,2,3]

Now return the median.
Output: 2

Instead of merging,
Can we somehow split both arrays so that
Left Part | Right Part
contains exactly half of the elements?
If yes, Median can be calculated directly.
*/

// 1. Brute force Approach
// Merge them into a new sorted array.
// Find the median from the merged array.

/*
Pseudocode

Merge arrays

If odd
    return middle
Else
    return average of middle two
*/

var findMedianSortedArrays = function (nums1, nums2) {
  // Array to store the merged sorted elements
  const merged = [];

  // Pointers for both arrays
  let i = 0;
  let j = 0;

  // Merge both arrays while both have elements
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // Copy remaining elements from nums1
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  // Copy remaining elements from nums2
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  // Total number of elements
  const n = merged.length;

  // If total elements are odd,
  // return the middle element
  if (n % 2 === 1) {
    return merged[Math.floor(n / 2)];
  }

  // If total elements are even,
  // return the average of the two middle elements
  const mid1 = merged[n / 2 - 1];
  const mid2 = merged[n / 2];

  return (mid1 + mid2) / 2;
};

/*
Time Complexity
Merging both arrays: O(n + m)
Finding the median: O(1)

Overall: O(n + m)

Space Complexity 
Extra merged array: O(n + m)
*/

// 2. Binary Search

/*
We always perform Binary Search on the smaller array, and we calculate the partition of the larger array automatically. 

Algorithm

Binary search on smaller array.
Choose partition.
Compute partition of second array.
Find

leftMax1 <= rightMin2
leftMax2 <= rightMin1

Check validity. true ---> answer found
Return median.
*/

/*
const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];

is exactly the same as:

let left1;
if (cut1 === 0) {
  // No element exists on the left side
  left1 = -Infinity;
} else {
  // Take the element just before the partition
  left1 = nums1[cut1 - 1];
}
*/

var findMedianSortedArraysBinary = function (nums1, nums2) {
  // Always binary search on the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const n1 = nums1.length;
  const n2 = nums2.length;

  const total = n1 + n2;

  // Number of elements that should be on the left side
  const leftSize = Math.floor((total + 1) / 2);

  let low = 0;
  let high = n1;

  while (low <= high) {
    // Partition in the first (smaller) array
    const cut1 = Math.floor((low + high) / 2);

    // Partition in the second array
    const cut2 = leftSize - cut1;

    // Largest value on the left side of nums1
    const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];

    // Smallest value on the right side of nums1
    const right1 = cut1 === n1 ? Infinity : nums1[cut1];

    // Largest value on the left side of nums2
    const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];

    // Smallest value on the right side of nums2
    const right2 = cut2 === n2 ? Infinity : nums2[cut2];

    // Check if the partition is correct
    if (left1 <= right2 && left2 <= right1) {
      // Odd total length
      if (total % 2 === 1) {
        return Math.max(left1, left2);
      }

      // Even total length
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    }

    // Too many elements taken from nums1
    if (left1 > right2) {
      high = cut1 - 1;
    }
    // Too few elements taken from nums1
    else {
      low = cut1 + 1;
    }
  }

  return -1;
};

console.log(findMedianSortedArraysBinary([1, 2], [3, 4]));

/*
Time Complexity
Merging both arrays: O(n + m)
Finding the median: O(1)

Overall: O(n + m)

Space Complexity
Extra merged array: O(n + m)
*/
