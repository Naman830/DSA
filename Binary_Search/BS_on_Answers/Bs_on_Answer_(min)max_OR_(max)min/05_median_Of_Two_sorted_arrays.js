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

console.log(findMedianSortedArrays([1, 2], [3, 4]));
