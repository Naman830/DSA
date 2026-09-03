/*
====================================================
N-QUEENS — BACKTRACKING
====================================================

PROBLEM:
Place N queens on an N x N chessboard such that
no two queens attack each other.

A queen cannot share:
1. Same row
2. Same column
3. Same diagonal


KEY IDEA:
Place exactly ONE queen in each row.

For every row:
    ↓
Try every column
    ↓
Is this position safe?
    ↓
YES → Place queen
    ↓
Move to next row
    ↓
If stuck → BACKTRACK
    ↓
Remove queen and try another position


DIAGRAM:

        C0   C1   C2   C3
     ┌────┬────┬────┬────┐
R0   │ .  │ Q  │ .  │ .  │
     ├────┼────┼────┼────┤
R1   │ .  │ .  │ .  │ Q  │
     ├────┼────┼────┼────┤
R2   │ Q  │ .  │ .  │ .  │
     ├────┼────┼────┼────┤
R3   │ .  │ .  │ Q  │ .  │
     └────┴────┴────┴────┘

One queen per row.


HOW DO WE CHECK SAFETY?

Column:
    col

Diagonal 1:
    row - col

Diagonal 2:
    row + col

We store these in Sets.

So checking whether a position is safe
takes O(1).


BACKTRACKING PATTERN:

    CHOOSE
      ↓
   EXPLORE
      ↓
    UNDO

Place Queen
    ↓
Recursive call
    ↓
Remove Queen


OPTIMAL APPROACH:
Use backtracking + Sets for columns
and diagonals.

TIME COMPLEXITY:
    O(N!) approximately

SPACE COMPLEXITY:
    O(N²) → board
    O(N)  → sets + recursion

====================================================
*/
