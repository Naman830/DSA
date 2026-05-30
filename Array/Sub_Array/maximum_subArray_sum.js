// You need to find the maximum sum of a continuous subarray.
// Continuous means elements should be together, without skipping.
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// SUBARRAY-->[-2,1,-3] & SUBSEQUENCE-->[-2,-5,2]

// 1. Brute Force Approach
// Generate every possible subarray and calculate its sum.

/*
Pseudocode

maxSum = -infinity

for start from 0 to n - 1:
    for end from start to n - 1:
        sum = 0
        for k from start to end:
            sum = sum + arr[k]

        maxSum = maximum(maxSum, sum)

return maxSum
*/