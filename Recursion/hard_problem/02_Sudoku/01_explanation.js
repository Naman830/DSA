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

/*
Complexity:-

Let E = number of empty cells.
Because each empty cell can potentially try 9 numbers:

1. Best Case
The board is almost solved and very little backtracking is required.
Time: O(E × 9) → approximately O(E)
Space: O(81) → O(1) for the board/sets, plus recursion

2. Average Case
Some backtracking is required.
Time: roughly O(9^E)
Space: O(E) recursion + O(81) Sets

3. Worst Case
The algorithm explores a very large portion of the search tree.
Time: O(9^E)
Space: O(E)

For a fixed 9×9 Sudoku, the board size is constant, so technically these are bounded constants. In interviews, O(9^E) time and O(E) recursion space is the useful complexity to state.
*/
