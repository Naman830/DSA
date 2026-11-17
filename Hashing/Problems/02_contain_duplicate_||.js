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

/*
Approach 2: Better — HashMap
- Time Complexity: O(n) — one traversal.
- Space Complexity: O(n) — Map can store up to n elements.
*/

function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Check if the element already exists
    if (map.has(nums[i])) {
      // Calculate distance from previous occurrence
      const distance = i - map.get(nums[i]);

      if (distance <= k) {
        return true;
      }
    }

    // Store or update the latest index
    map.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
