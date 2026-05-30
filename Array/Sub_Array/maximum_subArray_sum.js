// You need to find the maximum sum of a continuous subarray.
// Continuous means elements should be together, without skipping.
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// SUBARRAY-->[-2,1,-3] & SUBSEQUENCE-->[-2,-5,2]

// 1. Brute Force Approach
// Generate every possible subarray and calculate its sum.

/*
Pseudocode

maxSum = -infinity

for start from 0 to n - 1:
    for end from start to n - 1:
        sum = 0
        for k from start to end:
            sum = sum + arr[k]

        maxSum = maximum(maxSum, sum)

return maxSum
*/

// TC: O(n3) and SC: O(1)

function maximumSubarraySumBruteForce(arr) {
  let n = arr.length;

  // We take -Infinity because array can contain negative numbers also
  let maxSum = -Infinity;

  // This loop decides the starting index of subarray
  for (let start = 0; start < n; start++) {
    // This loop decides the ending index of subarray
    for (let end = start; end < n; end++) {
      // Calculate sum from start to end
      let sum = 0;

      for (let k = start; k <= end; k++) {
        sum += arr[k];
      }

      // Update maxSum if current subarray sum is greater
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

console.log(maximumSubarraySumBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 2. Better Approach
// For each starting index, keep adding elements one by one.
// So instead of recalculating the sum from zero every time, we continue the previous sum.

/*
Pseudocode

maxSum = -infinity

for start from 0 to n - 1:
    sum = 0

    for end from start to n - 1:
        sum = sum + arr[end]
        maxSum = maximum(maxSum, sum)

return maxSum
*/

// TC: O(n2) AND SC: O(1)

function maximumSubarraySumBetter(arr) {
  let n = arr.length;

  // Because numbers can be negative also
  let maxSum = -Infinity;

  // Pick starting point
  for (let start = 0; start < n; start++) {
    // Current sum for subarray starting from index start
    let sum = 0;

    // Pick ending point
    for (let end = start; end < n; end++) {
      // Add current element to sum
      sum += arr[end];

      // Update maximum sum
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

console.log(maximumSubarraySumBetter([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
