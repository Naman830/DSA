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


*/
