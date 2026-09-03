/*
Use duplicate technique 
| Case    |        Time | Extra Space* |
| ------- | ----------: | -----------: |
| Best    | `O(n × n!)` |       `O(n)` |
| Average | `O(n × n!)` |       `O(n)` |
| Worst   | `O(n × n!)` |       `O(n)` |
*/

function permute(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  function backtrack(index) {
    if (index === nums.length) {
      result.push([...nums]);
      return;
    }

    let used = new Set();
    for (let i = index; i < nums.length; i++) {
      if (used.has(nums[i])) continue;
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
console.log(permute([1, 1, 2]));
