/*
2. Key observation
The optimal solution uses Prefix Sum + Hash Map. It works when the array contains both positive and negative numbers.

Maintain a running sum called prefixSum.
If prefixSum === K, the subarray from index 0 to the current index has sum K.
If we have previously seen prefixSum - K, then the elements between that earlier index and the current index sum to K.
Store the earliest index at which each prefix sum occurs.
The earliest index gives the longest possible subarray ending at the current index.
Never overwrite an existing prefix sum, because an earlier index always gives a longer subarray.
*/

function longestSubarrayWithSumK(arr, K) {
  // Stores the first index where each prefix sum appears.
  const prefixMap = new Map();

  // Prefix sum before processing any element.
  // This represents an empty subarray ending at index -1.
  prefixMap.set(0, -1);

  let prefixSum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the running sum.
    prefixSum += arr[i];

    // If prefixSum - K exists, the subarray
    // between that earlier index and i has sum K.
    const requiredPrefix = prefixSum - K;

    if (prefixMap.has(requiredPrefix)) {
      const previousIndex = prefixMap.get(requiredPrefix);

      // Calculate the length of the current valid subarray.
      const currentLength = i - previousIndex;

      // Update the maximum length.
      maxLength = Math.max(maxLength, currentLength);
    }

    // Store only the first occurrence of each prefix sum.
    // Keeping the earliest index maximizes subarray length.
    if (!prefixMap.has(prefixSum)) {
      prefixMap.set(prefixSum, i);
    }
  }

  return maxLength;
}

// Example 1: Positive and negative numbers
const arr1 = [10, 5, 2, 7, 1, 9];
const K1 = 15;

console.log(longestSubarrayWithSumK(arr1, K1));
// Output: 4

// Example 2: Array containing negative numbers
const arr2 = [1, -1, 5, -2, 3];
const K2 = 3;

console.log(longestSubarrayWithSumK(arr2, K2));
// Output: 4

/*
| Complexity | Explanation                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| Time       | **O(N)** — Traverse the array once. Hash Map operations take O(1) average time. |
| Space      | **O(N)** — The Hash Map can store up to N distinct prefix sums.                 |
*/
