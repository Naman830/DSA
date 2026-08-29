/*
=========================================================
PATTERN: PRINT ALL — RECURSION
=========================================================

In "Print All" recursion problems, we need to generate
ALL possible choices / subsequences / combinations.

CORE IDEA:
For every element, we usually have 2 choices:

        TAKE the element
              OR
        DON'T TAKE the element


Example: [3, 1, 2]

                     3
                   /   \
                TAKE   SKIP
                 /       \
                3         []
               / \       / \
            TAKE SKIP TAKE SKIP
              1     1    1    1

Each element creates 2 branches:

             element
             /     \
          TAKE     SKIP


IMPORTANT:
If there are N elements:

    Number of possibilities = 2^N

Example:
N = 2  →  2² = 4 possibilities
N = 3  →  2³ = 8 possibilities


=========================================================
THE 4 IMPORTANT STEPS
=========================================================

1. TAKE
   → Add the current element.

2. RECURSE
   → Move to the next element.

3. UNDO / BACKTRACK
   → Remove the element we added.

4. DON'T TAKE
   → Move to the next element without adding it.


PATTERN TO REMEMBER:

        TAKE
          ↓
       RECURSE
          ↓
       BACKTRACK
          ↓
       DON'T TAKE


=========================================================
WHY DO WE BACKTRACK?
=========================================================

Suppose we take 3:

    current = [3]

We explore all possibilities starting with 3.

After finishing that branch:

    current.pop()

Now:

    current = []

We can explore the branch where 3 was NOT taken.


=========================================================
RECURSION TEMPLATE
=========================================================

function solve(index, current) {

    Base case
    if (index === arr.length) {
        Print / store answer
        return;
    }

    1. TAKE
    current.push(arr[index]);

    2. RECURSE
    solve(index + 1, current);

    3. BACKTRACK
    current.pop();

    4. DON'T TAKE
    solve(index + 1, current);
}
*/

/*
Problem:
Given an array, print all possible subsequences.

Example:
Input:  [3, 1]

Output:
[3, 1]
[3]
[1]
[]
*/

function printAllSubsequences(index, arr, current) {
  // Base case:
  // We have processed all elements.
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // --------------------------------
  // 1. TAKE the current element
  // --------------------------------
  current.push(arr[index]);

  // 2. RECURSE
  // Move to the next element
  printAllSubsequences(index + 1, arr, current);

  // --------------------------------
  // 3. BACKTRACK / UNDO
  // --------------------------------
  // Remove the element so that we
  // can explore the "don't take" branch.
  current.pop();

  // --------------------------------
  // 4. DON'T TAKE the current element
  // --------------------------------
  printAllSubsequences(index + 1, arr, current);
}

// Test
printAllSubsequences(0, [3, 1], []);

/*
| Complexity                 | Print All   |
| -------------------------- | ----------- |
| **Time**                   | `O(n × 2ⁿ)` |
| **Space**                  | `O(n)`      |
| **If storing all answers** | `O(n × 2ⁿ)` |
*/
