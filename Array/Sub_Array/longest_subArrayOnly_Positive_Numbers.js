// Approach: Optimal for Positive Numbers — Sliding Window
// This works only when array has positive numbers only.
/*
Imagine you have a window.

You keep expanding the window by moving right.

If sum becomes greater than K, shrink from left.

If sum becomes equal to K, update answer.
*/
// TC: O(n) and SC: O(1)

// PSEUDDO CODE
/*
left = 0
right = 0
sum = 0
maxLength = 0

while right < n:
    sum += arr[right]

    while sum > K:
        sum -= arr[left]
        left++

    if sum == K:
        maxLength = max(maxLength, right - left + 1)

    right++

return maxLength
*/

function longestSubarrayPositive(arr, k) {
  let left = 0;
  let sum = 0;
  let maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    // Add current element into window
    sum += arr[right];

    // If sum becomes greater than k, shrink window from left
    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }

    // If sum equals k, update longest length
    if (sum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  return maxLength;
}
console.log(longestSubarrayPositive([1, 2, 3, 1, 1, 1, 1], 3));
