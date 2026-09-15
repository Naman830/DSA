function longestSubarrayWithSumKPositive(arr, K) {
  // Left pointer represents the start of the window.
  let left = 0;

  // Stores the sum of the current window.
  let sum = 0;

  // Stores the maximum length found so far.
  let maxLength = 0;

  // Right pointer expands the window.
  for (let right = 0; right < arr.length; right++) {
    // Add the current element to the window sum.
    sum += arr[right];

    // If the sum exceeds K, shrink the window.
    // Since all elements are positive, removing elements
    // from the left will decrease the sum.
    while (sum > K && left <= right) {
      sum -= arr[left];
      left++;
    }

    // If the current window sum equals K,
    // calculate its length and update the answer.
    if (sum === K) {
      const currentLength = right - left + 1;

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// Example 1
console.log(longestSubarrayWithSumKPositive([1, 2, 3, 1, 1, 1, 1], 3));
// Output: 3

// Example 2
console.log(longestSubarrayWithSumKPositive([2, 3, 5, 1, 1, 1, 1], 5));
// Output: 3

// Example 3
console.log(longestSubarrayWithSumKPositive([1, 1, 1, 1, 1], 5));
// Output: 5

// Example 4: No valid subarray
console.log(longestSubarrayWithSumKPositive([2, 4, 6], 5));
// Output: 0
