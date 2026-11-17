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
