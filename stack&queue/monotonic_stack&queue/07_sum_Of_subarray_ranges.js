/*
This problem asks you to calculate the sum of (maximum - minimum) for every possible subarray.

For example:
nums = [1, 2, 3]

Subarrays:
[1]       → max - min = 0
[2]       → 0
[3]       → 0
[1,2]     → 2 - 1 = 1
[2,3]     → 3 - 2 = 1
[1,2,3]   → 3 - 1 = 2

Answer = 0 + 0 + 0 + 1 + 1 + 2 = 4

The key idea is:
Sum of ranges = Sum of all subarray maximums − Sum of all subarray minimums.
*/

/*
1. Brute Force
Generate every subarray and keep track of its minimum and maximum.

| Case    |  Time | Space |
| ------- | ----: | ----: |
| Best    | O(n²) |  O(1) |
| Average | O(n²) |  O(1) |
| Worst   | O(n²) |  O(1) |
*/

function subArrayRanges(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);

      total += max - min;
    }
  }
  return total;
}

console.log(subArrayRanges([1, 2, 3])); // 4
console.log(subArrayRanges([1, 3, 2])); // 5

// ======================================================================================
// 2. OPTIMAL SOLUTION
// ======================================================================================

// Problem: Sum of Subarray Ranges
// Return the sum of (maximum - minimum) for every subarray.
//
// Approach:
// Sum of ranges
// = Sum of subarray maximums - Sum of subarray minimums
//
// We use monotonic stacks to calculate the contribution
// of every element as a minimum and as a maximum.
// TC: O(n) && SC: O(n)

function subArrayRanges(nums) {
  const n = nums.length;

  // Find the sum of all subarray minimums
  const sumMin = getSumOfMinimums(nums);

  // Find the sum of all subarray maximums
  const sumMax = getSumOfMaximums(nums);

  return sumMax - sumMin;
}

// --------------------------------------------------
// Sum of Subarray Minimums
// --------------------------------------------------

function getSumOfMinimums(nums) {
  const n = nums.length;

  const left = new Array(n);
  const right = new Array(n);

  const stack = [];

  // Find previous smaller element
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      left[i] = i + 1;
    } else {
      left[i] = i - stack[stack.length - 1];
    }

    stack.push(i);
  }

  stack.length = 0;

  // Find next smaller OR equal element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      right[i] = n - i;
    } else {
      right[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i] * left[i] * right[i];
  }

  return sum;
}

// --------------------------------------------------
// Sum of Subarray Maximums
// --------------------------------------------------

function getSumOfMaximums(nums) {
  const n = nums.length;

  const left = new Array(n);
  const right = new Array(n);

  const stack = [];

  // Find previous greater element
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      left[i] = i + 1;
    } else {
      left[i] = i - stack[stack.length - 1];
    }

    stack.push(i);
  }

  stack.length = 0;

  // Find next greater OR equal element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      right[i] = n - i;
    } else {
      right[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i] * left[i] * right[i];
  }

  return sum;
}

// Test cases
console.log(subArrayRanges([1, 2, 3])); // 4
console.log(subArrayRanges([1, 3, 2])); // 5
console.log(subArrayRanges([1, 3, 3])); // 4
