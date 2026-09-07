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

function solve(index, arr) {
  // Base case
  if (index === arr.length) {
    // Print the first valid answer
    console.log(arr);

    // Tell every previous recursive call:
    // "Answer found, stop recursion."
    return true;
  }

  for (const choice of choices) {
    arr.push(choice);

    // If answer found, stop everything
    if (solve(index + 1, arr)) {
      return true;
    }

    // Backtrack
    arr.pop();
  }

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
