/*
2. Better — Two Loops with Running Sum
Instead of calculating the sum again for every subarray, maintain a running sum.

Key observation:-

Fix the starting index i.
Extend the subarray one element at a time.
Add the current element to sum.
If sum === K, calculate the length.

This removes the third loop.
*/

function longestSubarrayBetter(arr, K) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === K) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

console.log(longestSubarrayBetter([1, 2, 3, 1, 1, 1, 1], 3));
// Output: 3

/*
| Complexity | Explanation                           |
| ---------- | ------------------------------------- |
| Time       | O(N²) — Two nested loops              |
| Space      | O(1) — Running sum and maximum length |
*/
