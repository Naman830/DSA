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
// TC: O(n2) && SC: O(1)

function sumSubarrayMinsOptimal(arr) {
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

console.log(sumSubarrayMinsOptimal([3, 1, 2, 4])); // 17
console.log(sumSubarrayMinsOptimal([11, 81, 94, 43, 3])); // 444

// =========================================================================================
// Optimal Approach — Monotonic Stack
// =========================================================================================

/*
Suppose:
arr = [3, 1, 2, 4]
          ↑
          1

For 1:
Previous smaller = none
Next smaller = none

Therefore 1 can extend:

← ← ← 1 → → →

Number of left choices:
2

Number of right choices:
3

Therefore:

contribution = arr[i] × left × right
contribution = 1 × 2 × 3 
             = 6

Exactly the 6 subarrays we found earlier.
*/

function sumSubarrayMinsOptimal(arr) {
  const n = arr.length;
  const MOD = 1e9 + 7;

  const left = new Array(n);
  const right = new Array(n);

  // --------------------------------------------------
  // Find Previous Smaller Element
  // --------------------------------------------------

  const stack = [];

  for (let i = 0; i < n; i++) {
    // Remove elements that are greater than or equal
    // to the current element.
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    // If stack is empty, there is no smaller element
    // on the left.
    if (stack.length === 0) {
      left[i] = i + 1;
    } else {
      left[i] = i - stack[stack.length - 1];
    }

    stack.push(i);
  }

  // --------------------------------------------------
  // Find Next Smaller Element
  // --------------------------------------------------

  stack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    // Remove elements that are strictly greater
    // than the current element.
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    // If stack is empty, there is no smaller element
    // on the right.
    if (stack.length === 0) {
      right[i] = n - i;
    } else {
      right[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  // --------------------------------------------------
  // Calculate each element's contribution
  // --------------------------------------------------

  let answer = 0;

  for (let i = 0; i < n; i++) {
    const contribution = arr[i] * left[i] * right[i];

    answer = (answer + contribution) % MOD;
  }

  return answer;
}

console.log(sumSubarrayMinsOptimal([3, 1, 2, 4])); // 17
console.log(sumSubarrayMinsOptimal([11, 81, 94, 43, 3])); // 444
console.log(sumSubarrayMinsOptimal([1, 1, 1])); // 6

/*
| Case    | Time | Space |
| ------- | ---: | ----: |
| Best    | O(n) |  O(n) |
| Average | O(n) |  O(n) |
| Worst   | O(n) |  O(n) |
*/
