/*
Optimal Approach — Backtracking + Swap
Instead of creating a new array at every recursive call, we modify the same array.

Suppose:
[1,2,3]

We swap 1 and 2:
[2,1,3]

After generating all permutations starting with 2, we must restore:
[1,2,3]

This is called backtracking
*/

/*
| Case    |      Time | Extra Space* |
| ------- | --------: | -----------: |
| Best    | O(n × n!) |         O(n) |
| Average | O(n × n!) |         O(n) |
| Worst   | O(n × n!) |         O(n) |
*/

function permute(nums) {
  const result = [];
  function backtrack(index) {
    if (index === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      // Choose:
      // Put nums[i] at nums[index]
      [nums[index], nums[i]] = [nums[i], nums[index]];

      // Explore:
      // Generate permutations for the remaining positions
      backtrack(index + 1);

      // Undo:
      // Restore the original array for the next choice
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }
  }

  backtrack(0);

  return result;
}

// Test cases
console.log(permute([1, 2, 3]));

console.log(permute([0, 1]));

console.log(permute([1]));
