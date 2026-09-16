/*
Longest Subarray with Sum K
Given an array and an integer K, find the length of the longest contiguous subarray whose sum is exactly K.

Example
arr = [1, 2, 3, 1, 1, 1, 1]
K = 3

Subarrays with sum 3 include:

[1, 2] → length 2
[3] → length 1
[1, 1, 1] → length 3

Answer: 3

We will consider arrays containing both positive and negative numbers, as in the problem from the provided source.
*/

/*
1. Brute Force — Generate All Subarrays

| Complexity | Explanation                 |
| ---------- | --------------------------- |
| Time       | O(N³) — Three nested loops  |
| Space      | O(1) — Only a few variables |
*/
