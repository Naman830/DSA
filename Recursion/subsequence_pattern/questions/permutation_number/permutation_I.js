/*
The goal is to take an array of distinct numbers and generate every possible ordering of those numbers.

                         []
                  /       |       \
                 1        2        3
               /   \    /   \    /   \
              2     3  1     3  1     2
              |     |  |     |  |     |
              3     2  3     1  2     1

             [1,2,3] [1,3,2] ...
    
2. Key observations
Every number must appear exactly once in each permutation.
Order matters: [1,2,3] and [2,1,3] are different.
Numbers are guaranteed to be unique.
If n is the array length, there are exactly n! permutations.
n <= 6, so at most 6! = 720 answers.
*/

// Optimal — Backtracking
// "Which unused number should I put here?" mark everytime when we take a number for combos

/*
LeetCode 46. Permutations

Given an array nums of distinct integers, return all the
possible permutations.

Example:
Input:  [1, 2, 3]

Output:
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
*/

function permute(nums) {
  const result = [];
  const current = [];
  const used = new Array(nums.length).fill(false);

  function backtrack() {
    // We have selected every number
    if (current.length === nums.length) {
      // Important: store a copy
      result.push([...current]);
      return;
    }

    // Try every number as the next choice
    for (let i = 0; i < nums.length; i++) {
      // Don't use the same number twice
      if (used[i]) {
        continue;
      }

      // Choose
      used[i] = true;
      current.push(nums[i]);

      // Explore
      backtrack();

      // Undo choice (backtracking)
      current.pop();
      used[i] = false;
    }
  }

  backtrack();

  return result;
}

// Test cases
console.log(permute([1, 2, 3]));

console.log(permute([0, 1]));

console.log(permute([1]));
