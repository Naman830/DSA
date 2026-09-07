/*
We have many possible answers, but we only want to find and print the first valid answer, then stop all further recursion.

Suppose:-
arr = [2, 1, 3]

Possible subsets include:
[2, 1]  → sum = 3 ✅
[3]     → sum = 3 ✅

We only want: [2, 1]
So once we find it, we return true and stop.
*/
// Find and print the FIRST valid answer.
// Once an answer is found, stop all further recursion.

/*
solve()
   │
   ├── valid? ── YES → print → return true 🛑
   │
   └── try choices
          │
          ├── choice 1
          │      └── solve()
          │             └── true → return true 🛑
          │
          ├── choice 2
          └── choice 3
*/

function solve(index, path) {
  // ==========================================
  // 1. BASE CASE
  // ==========================================

  // We have reached a complete solution.
  if (isValid(path)) {
    console.log(path);

    // Return true to tell the previous recursive
    // call that an answer has already been found.
    return true;
  }

  // ==========================================
  // 2. TRY ALL POSSIBLE CHOICES
  // ==========================================

  for (const choice of choices) {
    // Make the choice
    path.push(choice);

    // ==========================================
    // 3. RECURSE
    // ==========================================

    // If the recursive call found an answer,
    // immediately stop this function too.
    if (solve(index + 1, path)) {
      return true;
    }

    // ==========================================
    // 4. BACKTRACK
    // ==========================================

    // The choice did not lead to an answer,
    // so undo it and try the next choice.
    path.pop();
  }

  // No valid answer was found from this state.
  return false;
}

// Start recursion
const found = solve(0, []);
// Print something after recursion finishes
console.log("Answer found:", found);

/*
TIME COMPLEXITY:-
| Case    |      Time |
| ------- | --------: |
| Best    |  **O(n)** |
| Average | **O(2ⁿ)** |
| Worst   | **O(2ⁿ)** |

SPACE COMPLEXITY:-
| Case    |    Space |
| ------- | -------: |
| Best    | **O(n)** |
| Average | **O(n)** |
| Worst   | **O(n)** |
*/
