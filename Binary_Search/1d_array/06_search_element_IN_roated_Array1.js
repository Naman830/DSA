// You are given a sorted array that has been rotated at some pivot, and a target value.
/*
Main Observation
For any mid:

low ----- mid ----- high

Either:
nums[low] <= nums[mid]
means left half is sorted

OR

nums[mid] <= nums[high]
means right half is sorted

One of them must be sorted.
*/
