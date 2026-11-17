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

/*
Approach 3: Optimal — Sliding Window + Set
Maintain a sliding window containing at most k previous elements.

Time Complexity: O(n) — Set operations take O(1) average time.
Space Complexity: O(min(n, k)) — Set maintains at most k elements.
*/

function containsNearbyDuplicateOptimal(nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    // Check if current element already exists
    // in our sliding window
    if (set.has(nums[i])) {
      return true;
    }

    // Add current element
    set.add(nums[i]);

    // Maintain window size of at most k
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
}

console.log(containsNearbyDuplicateOptimal([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicateOptimal([1, 2, 3, 1, 2, 3], 2)); // false
