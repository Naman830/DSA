/*
EXPLANATION:-

1. Find its minimum element.
2. Add that minimum to the answer.

arr = [3, 1, 2, 4]

[3]          → 3
[3,1]        → 1
[3,1,2]      → 1
[3,1,2,4]    → 1

[1]          → 1
[1,2]        → 1
[1,2,4]      → 1

[2]          → 2
[2,4]        → 2

[4]          → 4

3 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 2 + 4
ANS = 17
*/

// 1. Brute Force
// Generate every subarray and keep track of its minimum while expanding the right side.

function sumSubarrayMins(arr) {
  const MOD = 1e9 + 7;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;

    for (let j = i; j < arr.length; j++) {
      // Update the minimum of the current subarray.
      min = Math.min(min, arr[j]);

      // Add the current subarray's minimum.
      sum = (sum + min) % MOD;
    }
  }

  return sum;
}

console.log(sumSubarrayMins([3, 1, 2, 4])); // 17
console.log(sumSubarrayMins([11, 81, 94, 43, 3])); // 444
