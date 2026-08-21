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

/*
Better Understanding — Contribution Technique

Suppose: nums =                             [1, 3, 2]
For every subarray, we need:                MAX - MIN

Instead of processing each subarray:        MAX contribution - MIN contribution

So we can independently calculate:

Sum of Subarray Maximums and Sum of Subarray Minimums

Then:
Answer = Maximum Sum - Minimum Sum
*/
