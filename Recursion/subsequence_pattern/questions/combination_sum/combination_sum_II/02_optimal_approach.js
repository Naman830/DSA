function combinationSum2(candidates, target) {
  // Sort first.
  // This helps us:
  // 1. Detect duplicates
  // 2. Stop early when number > remaining
  candidates.sort((a, b) => a - b);

  const result = [];
  const current = [];

  function backtrack(start, remaining) {
    // --------------------------------
    // Base case
    // --------------------------------
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    // Try every candidate from 'start'
    for (let i = start; i < candidates.length; i++) {
      // --------------------------------
      // Skip duplicates at the SAME level
      // --------------------------------
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      // --------------------------------
      // Pruning
      // --------------------------------
      // Because array is sorted,
      // everything after candidates[i]
      // will also be too large.
      if (candidates[i] > remaining) {
        break;
      }

      // --------------------------------
      // Choose
      // --------------------------------
      current.push(candidates[i]);

      // --------------------------------
      // Explore
      // --------------------------------
      // i + 1 because every element
      // can be used only once.
      backtrack(i + 1, remaining - candidates[i]);

      // --------------------------------
      // Undo choice
      // --------------------------------
      current.pop();
    }
  }

  backtrack(0, target);

  return result;
}

// Test case 1
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// Output:
// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6]
// ]

// Test case 2
console.log(combinationSum2([2, 5, 2, 1, 2], 5));

// Output:
// [
//   [1, 2, 2],
//   [5]
// ]
