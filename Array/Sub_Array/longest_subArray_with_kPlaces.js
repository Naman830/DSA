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

function longestSubarray(arr, k) {
  let maxLength = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === k) {
        let length = j - i + 1;

        maxLength = Math.max(maxLength, length);
      }
    }
  }
   return maxLength;
}

console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 6));
