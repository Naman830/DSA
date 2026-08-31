/*
==============================================================================================
Better → Backtracking
==============================================================================================

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


TC: O(C × K) worst case, but explores fewer useless paths
SC: O(T / minCandidate + M × K)

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
