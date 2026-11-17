/*
Problem: Given an integer array nums and an integer k, return true if there are two distinct indices i and j such that:

- nums[i] === nums[j]
- Math.abs(i - j) <= k

Otherwise, return false.
*/

/*
Key observations
- We need to find duplicate elements.
- We also need to track their indices.
- A duplicate is valid only when its index distance is <= k.
- A Set or Map can help us solve this efficiently.
*/

/*
Approach 1: Brute Force
Check every element against the next elements within the allowed distance k.

Time Complexity: O(n * min(n, k))
Space Complexity: O(1)
*/
