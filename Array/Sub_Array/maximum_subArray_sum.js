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

// 3. Optimal Approach — Kadane’s Algorithm

/*
At every index, ask:
Should I continue the old subarray?
Or should I start a new subarray from here? 

In simple words if our sum < 0 so it will be zero and if ans is < 0 so ans will be zero 

So whenever current sum becomes negative, we throw it away.
Because a negative sum will only reduce the future answer.
*/

/*
Pseudocode

maxSum = -infinity
currentSum = 0

for each number in array:
    currentSum = currentSum + number

    maxSum = maximum(maxSum, currentSum)

    if currentSum < 0:
        currentSum = 0

return maxSum 
*/

// TC: O(n) and SC: O(1)

function maximumSubarraySum(arr) {
  // maxSum stores the best answer found so far
  // We use -Infinity because array can contain all negative numbers
  let maxSum = -Infinity;

  // currentSum stores the sum of current running subarray
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Add current element to current subarray sum
    currentSum += arr[i];

    // Update maxSum if currentSum is better
    maxSum = Math.max(maxSum, currentSum);

    // If currentSum becomes negative,
    // it will hurt future subarrays, so reset it
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane’s Algorithm With Subarray Also
// Sometimes interviewer asks: Return the maximum sum and the subarray also.
// Output
// maxSum = 6
// subarray = [4, -1, 2, 1]

function maximumSubarrayWithElements(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  // These will store final answer subarray indices
  let start = -1;
  let end = -1;

  // This stores possible starting index of current subarray
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    // If currentSum is greater than maxSum,
    // update answer and store start/end indices
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }

    // If currentSum becomes negative,
    // reset it and start a new subarray from next index
    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  return {
    maxSum: maxSum,
    subarray: arr.slice(start, end + 1),
  };
}

console.log(maximumSubarrayWithElements([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
