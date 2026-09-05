/*
Explanation:-
You are given a 9 × 9 Sudoku board. Some cells are filled and some are ".".

Fill all empty cells so that:

Each row contains 1–9 only once.
Each column contains 1–9 only once.
Each 3 × 3 box contains 1–9 only once.

The goal is to modify the board in-place.
*/

/*
Key Observation:-

For every empty cell:

Try numbers 1 → 9.
Check whether the number is valid in its row, column, and 3×3 box.
If valid → place it.
Recursively solve the remaining board.
If it doesn't work → undo it (backtrack) and try the next number.

The main idea:
Choose → Explore → Undo
*/
