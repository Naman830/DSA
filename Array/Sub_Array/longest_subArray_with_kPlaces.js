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
      // it help to check direct adding the number
      sum += arr[j];

      // If current subarray sum is equal to k
      if (sum === k) {
        // length help to find the length of the elements it take
        let length = j - i + 1;
        maxLength = Math.max(maxLength, length);
      }
    }
  }
  return maxLength;
}

console.log(longestSubarrayBrute([1, 2, 3, 1, 1, 1, 1], 6));

// Approach 2: Optimal — Prefix Sum + HashMap

// This works even with:
// negative numbers
// positive numbers
// zeros

/*
We use prefix sum. It means:
sum from index 0 to current index

Suppose current prefix sum is sum.
We want subarray sum = K.

So: [currentSum - oldPrefixSum = K]

Therefore: [oldPrefixSum = currentSum - K]

So, while moving through array, we check: 
Has currentSum - K appeared before?

If yes, we found a subarray with sum K.
*/

// PSEUDO CODE
/* 
map = empty
sum = 0
maxLength = 0

for i from 0 to n-1:
    sum += arr[i]

    if sum == K:
        maxLength = i + 1

    remaining = sum - K

    if remaining exists in map:
        length = i - map[remaining]
        maxLength = max(maxLength, length)

    if sum does not exist in map:
        map[sum] = i

return maxLength
*/

// TC: 0(n) & SC: O(n)
function longestSubarrayWithSumKBetter(arr, k) {
  let prefixSum = 0;
  let maxLength = 0;

  // Map will store prefixSum -> first index where this prefixSum appeared
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    // Add current element to prefix sum
    prefixSum += arr[i];

    // Case 1:
    // If prefixSum itself is equal to k,
    // then subarray from index 0 to i has sum k
    if (prefixSum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    // Case 2:
    // We need to find if prefixSum - k appeared before
    let neededSum = prefixSum - k;

    if (map.has(neededSum)) {
      let previousIndex = map.get(neededSum);
      let currentLength = i - previousIndex;

      maxLength = Math.max(maxLength, currentLength);
    }

    // Store only the first occurrence of prefixSum
    // Because first occurrence gives longest possible length
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return maxLength;
}

console.log(longestSubarrayWithSumKBetter([1, -1, 5, -2, 3], 3));

// Approach 3: Optimal for Positive Numbers — Sliding Window
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