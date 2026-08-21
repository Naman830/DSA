/*
This problem asks you to calculate the sum of (maximum - minimum) for every possible subarray.

For example:
nums = [1, 2, 3]

Subarrays:
[1]       → max - min = 0
[2]       → 0
[3]       → 0
[1,2]     → 2 - 1 = 1
[2,3]     → 3 - 2 = 1
[1,2,3]   → 3 - 1 = 2

Answer = 0 + 0 + 0 + 1 + 1 + 2 = 4

The key idea is:
Sum of ranges = Sum of all subarray maximums − Sum of all subarray minimums.
*/
