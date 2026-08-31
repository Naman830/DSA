function combinationSum3(k, n) {
  const result = [];

  const current = [];

  /*
    Backtracking function

    start:
      The number from which we should start choosing.

    remainingK:
      How many numbers are still required.

    remainingTarget:
      How much sum is still required.
  */

  function backtrack(start, remainingK, remainingTarget) {
    if (remainingK === 0) {
      if (remainingTarget === 0) {
        // current is valid, so add a copy to result.
        result.push([...current]);
      }

      return;
    }

    for (let num = start; num <= 9; num++) {
      /*
        PRUNING

        If num is already greater than the remaining target,
        choosing it is impossible.

        Since numbers increase as the loop continues,
        every number after num will also be too large.

        Therefore, we can stop the loop.
      */
      if (num > remainingTarget) {
        break;
      }

      // CHOOSE
      // Add the current number to our combination.
      current.push(num);

      /*
        EXPLORE

        Choose the next number starting from num + 1.

        Why num + 1?

        Because numbers must be DISTINCT.

        Example:
        If we choose 3,
        the next recursive call starts from 4.

        So we can never choose 3 again.
      */
      backtrack(num + 1, remainingK - 1, remainingTarget - num);

      /*
        BACKTRACK

        Remove the number we just selected.

        This allows us to try another number
        in the next iteration of the loop.
      */
      current.pop();
    }
  }

  // Start searching from number 1.
  backtrack(1, k, n);

  // Return all valid combinations.
  return result;
}

// -------------------------
// Test Cases
// -------------------------

console.log(combinationSum3(3, 7));
// Output: [[1, 2, 4]]

console.log(combinationSum3(3, 9));
// Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]

console.log(combinationSum3(4, 1));
// Output: []

console.log(combinationSum3(3, 15));
// Output: [
//   [1, 5, 9],
//   [1, 6, 8],
//   [2, 4, 9],
//   [2, 5, 8],
//   [2, 6, 7],
//   [3, 4, 8],
//   [3, 5, 7],
//   [4, 5, 6]
// ]
