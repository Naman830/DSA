/*
We need subarrays whose sum = 6

Possible:

[1,2,3] = 6 → length 3
[3,1,1,1] = 6 → length 4
[1,1,1,1,2] not continuous

Answer: 4

Because [3,1,1,1] is longest.

*/

// Approach 1 — Brute Force

// Generate ALL subarrays.
// Check their sum.

// If sum == k:
// calculate length
// store maximum

/*
maxLen = 0

for i from 0 to n-1

    sum = 0

    for j from i to n-1

        sum += arr[j]

        if sum == k
            len = j - i + 1
            update maxLen

*/

function longestSubarrayBrute(arr, k) {
  // Store maximum length
  let maxLen = 0;

  // Pick starting index
  for (let i = 0; i < arr.length; i++) {
    // Sum for current subarray
    let sum = 0;

    // Extend subarray
    for (let j = i; j < arr.length; j++) {
      // Add current element
      sum += arr[j];

      // Check if sum becomes k
      if (sum === k) {
        // Length of subarray
        let len = j - i + 1;

        // Update maximum length
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  return maxLen;
}

console.log(longestSubarrayBrute([1, 2, 3, 1, 1, 1, 1], 6));
