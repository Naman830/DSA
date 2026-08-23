/*
Optimal — Monotonic Deque

1. We don't want to search all k elements again.
2. Use a Monotonic Decreasing Deque.
3. The deque stores indices, and their values are always decreasing:    
10 → 8 → 5 → 2
The front always contains the maximum.
*/
/*
Problem:
Given an array nums and an integer k, return the maximum
value in each sliding window of size k.

Example:
nums = [1,3,-1,-3,5,3,6,7], k = 3

Output:
[3,3,5,5,6,7]
*/

function maxSlidingWindow(nums, k) {
  const deque = []; // Stores indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices that are outside the window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Remove smaller elements from the back
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // 3. Add current index
    deque.push(i);

    // 4. Once window size becomes k,
    //    front of deque is the maximum
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Test cases
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3, 3, 5, 5, 6, 7]

console.log(maxSlidingWindow([1], 1));
// [1]

console.log(maxSlidingWindow([1, -1], 1));
// [1, -1]

console.log(maxSlidingWindow([9, 8, 7, 6], 2));
// [9, 8, 7]

/*
shift() is technically O(n) because JavaScript arrays shift all remaining elements.
For a truly optimal O(n) implementation, use a pointer instead of shift():
*/
