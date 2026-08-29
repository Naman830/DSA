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

*/
