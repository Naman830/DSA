/*
Optimal approach — Backtracking

Approach
Sort the array.
Add the current subset to the answer.
Loop from start to the end.
If the current number is the same as the previous number at this level, skip it.
Take the number and recursively continue.
Remove it when returning — this is backtracking.
*/

function subsetsWithDup(nums) {
  // Step 1: Sort the array.
  // This puts duplicate numbers next to each other.
  nums.sort((a, b) => a - b);

  let result = [];
  let current = [];

  function backtrack(start) {
    // Every current combination is a valid subset.
    result.push([...current]);

    // Try choosing every number from start onwards.
    for (let i = start; i < nums.length; i++) {
      // Skip duplicate numbers at the SAME recursion level.
      //
      // Example:
      // [1, 2, 2]
      //     ↑  ↑
      //     i-1 i
      //
      // If we already tried the first 2 at this level,
      // don't try the second 2 again.
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      // TAKE
      current.push(nums[i]);

      // Move to the next index.
      backtrack(i + 1);

      // UNDO / BACKTRACK
      current.pop();
    }
  }

  backtrack(0);

  return result;
}

// Test case 1
console.log(subsetsWithDup([1, 2, 2]));

// Test case 2
console.log(subsetsWithDup([1, 2, 2, 3]));

// Test case 3
console.log(subsetsWithDup([2, 2, 2]));

/*
| Case    |                   Time |             Space |
| ------- | ---------------------: | ----------------: |
| Best    |       `O(n log n + n)` | `O(n)` auxiliary* |
| Average | `O(n log n + n × 2^n)` | `O(n)` auxiliary* |
| Worst   | `O(n log n + n × 2^n)` | `O(n)` auxiliary* |
*/
