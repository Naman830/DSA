/*
1. You are given an array candidates and a target.
2. You need to find all combinations whose sum equals target.
3. Important: you can use the same number multiple times.

Example:-
candidates = [2, 3, 6, 7]
target = 7

Possible combinations:
2 + 2 + 3 = 7
7 = 7

So:
[[2,2,3], [7]]

2. Key observations
Same element can be picked multiple times.

Order does NOT matter.
[2,3,2] == [2,2,3]

We only want one of them.

If sum === target → we found an answer.
If sum > target → stop exploring that path.

The most important idea is:
After picking a number, we stay at the same index because we are allowed to pick it again.
*/

//==============================================================================================
// Brute Force =====> generate all possible combination =====> TC: O(n2) && SC: O(1)
//==============================================================================================

/*
Better → Backtracking

                 [ ]
                  |
            candidates[0]
             /          \
           PICK        DON'T PICK
            |              |
          [2]             []
            |              |
        PICK again      move index
            |
          [2,2]
*/

function combinationSum(candidates, target) {
  const result = [];

  function backtrack(index, current, sum) {
    // If sum becomes equal to target,
    // we found a valid combination.
    if (sum === target) {
      result.push([...current]);
      return;
    }

    // If sum becomes greater than target,
    // this path is useless.
    if (sum > target) {
      return;
    }

    // If we have checked all candidates,
    // stop this path.
    if (index === candidates.length) {
      return;
    }

    // --------------------------------
    // PICK the current candidate
    // --------------------------------

    current.push(candidates[index]);

    // Stay at the same index because
    // we can use the same number again.
    backtrack(index, current, sum + candidates[index]);

    // Undo the choice
    current.pop();

    // --------------------------------
    // DON'T PICK the current candidate
    // --------------------------------

    // Move to the next candidate.
    backtrack(index + 1, current, sum);
  }

  // Start from index 0 with empty combination
  // and sum = 0.
  backtrack(0, [], 0);

  return result;
}

// Test cases

console.log(combinationSum([2, 3, 6, 7], 7));
// [[2,2,3], [7]]

console.log(combinationSum([2, 3, 5], 8));
// [[2,2,2,2], [2,3,3], [3,5]]

console.log(combinationSum([2], 1));
// []
