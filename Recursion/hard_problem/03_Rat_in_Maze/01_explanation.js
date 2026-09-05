/*
Explanation:-
The goal is to move a rat from the top-left (0,0) to the bottom-right (n-1,n-1) of a maze.

1 → cell is open, we can move.
0 → cell is blocked.
We try a direction → if it works, continue.
If it leads to a dead end → backtrack and try another direction.
*/

/*
Key Observation:-
Suppose:

1  0  0  0
1  1  0  1
1  1  0  0
0  1  1  1

One valid path is:
🐀 → ↓ → ↓ → → → ↓ "DLRU"

The important idea:
Choose → Explore → Undo → Try next choice

That's the core of backtracking.
*/
