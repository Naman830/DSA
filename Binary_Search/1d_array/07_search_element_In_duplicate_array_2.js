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
