/*
Given an array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that:

i != j
j != k
i != k

[nums[i] + nums[j] + nums[k] = 0]

Find all combinations of 3 numbers whose sum equals 0.
1. Not indices.
2. Not count.
3. Actual triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: 
[-1,0,1]
[0,-1,1]
[1,-1,0]

are all considered the same triplet.

We only return one.

This problem is: Sorting + Two Pointers
*/
