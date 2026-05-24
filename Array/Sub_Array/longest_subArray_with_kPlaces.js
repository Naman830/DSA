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

// TC: O(N2) Because for every index, we check many subarrays. &
// SC: O(1)

function longestSubarrayBrute(arr, k) {
  let n = arr.length;
  let maxLength = 0;

  // Pick starting point of subarray
  for (let i = 0; i < n; i++) {
    let sum = 0;

    // Pick ending point of subarray
    for (let j = i; j < n; j++) {
      sum += arr[j];

      // If current subarray sum is equal to k
      if (sum === k) {
        let length = j - i + 1;
        maxLength = Math.max(maxLength, length);
      }
    }
  }
  return maxLength;
}

console.log(longestSubarrayBrute([1, 2, 3, 1, 1, 1, 1], 6));

// Better/Optimal Approach Using HashMap

// This works even with:
// negative numbers
// positive numbers
// zeros

/*
Store:
prefixSum → first index
Why first index?
Because we want LONGEST subarray.
Earlier index gives bigger length.
*/
