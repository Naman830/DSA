/*
=========================================================

Observation:
- Every row is sorted (Left → Right)
- Every column is sorted (Top → Bottom)
- Matrix CANNOT be treated as a single sorted array.

Example:
1  4  7 11
2  5  8 12
3  6  9 16
10 13 14 17

Why Top-Right?
- Left  = Smaller values
- Down  = Larger values

Algorithm:
1. Start at top-right.
2. If current == target → return true.
3. If current > target → move LEFT.
4. If current < target → move DOWN.
5. Repeat until out of bounds.

Why?
- current > target:
  Everything below is even bigger.
  So remove the entire column.

- current < target:
  Everything left is even smaller.
  So remove the entire row.

=========================================================
*/
