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
