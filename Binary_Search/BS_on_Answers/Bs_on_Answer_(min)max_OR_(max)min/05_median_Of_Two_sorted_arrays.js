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
