/*
| Approach       | Time Complexity          | Space Complexity | Easy Meaning                   |
| -------------- | ------------------------ | ---------------- | ------------------------------ |
| 🟥 **Brute**   | **Exponential**          | **O(K)**         | Try almost everything          |
| 🟨 **Better**  | **Exponential**          | **O(K)**         | Avoid duplicate permutations   |
| 🟩 **Optimal** | **Exponential (pruned)** | **O(K)**         | Sort + avoid unnecessary calls |
*/

function combinationSum(candidates, target) {
  const result = [];

  // Sort so that we can stop early when a number
  // becomes larger than the remaining target.
  candidates.sort((a, b) => a - b);

  // -----------------------------------------
  // Backtracking function
  // -----------------------------------------
  function backtrack(index, current, sum) {
    // -----------------------------------------
    // BASE CASE 1:
    // We found a combination whose sum is target
    // -----------------------------------------
    if (sum === target) {
      // Push a COPY because current will later change
      result.push([...current]);
      return;
    }

    // -----------------------------------------
    // BASE CASE 2:
    // Sum became greater than target
    // This path can never give a valid answer
    // -----------------------------------------
    if (sum > target) {
      return;
    }

    // -----------------------------------------
    // BASE CASE 3:
    // We have checked all candidates
    // -----------------------------------------
    if (index === candidates.length) {
      return;
    }

    // -----------------------------------------
    // CHOICE 1: PICK current candidate
    // -----------------------------------------

    current.push(candidates[index]);

    /*
      IMPORTANT:

      We call backtrack(index), NOT index + 1.

      Why?

      Because the same number can be used
      multiple times.

      Example:
      [2, 2, 2, 3]
    */
    backtrack(index, current, sum + candidates[index]);

    // Undo our choice
    // This is called BACKTRACKING
    current.pop();

    // -----------------------------------------
    // CHOICE 2: SKIP current candidate
    // -----------------------------------------

    /*
      We don't want to use this candidate anymore,
      so move to the next index.
    */
    backtrack(index + 1, current, sum);
  }

  // Start recursion from index 0
  backtrack(0, [], 0);

  return result;
}

// -----------------------------------------
// Test cases
// -----------------------------------------

console.log(combinationSum([2, 3, 6, 7], 7));
// [[2,2,3], [7]]

console.log(combinationSum([2, 3, 5], 8));
// [[2,2,2,2], [2,3,3], [3,5]]

console.log(combinationSum([2], 1));
// []
