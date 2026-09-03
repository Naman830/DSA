/*
Optimal Approach — Backtracking + Swap
Instead of creating a new array at every recursive call, we modify the same array.

Suppose:
[1,2,3]

We swap 1 and 2:
[2,1,3]

After generating all permutations starting with 2, we must restore:
[1,2,3]

This is called backtracking
*/
