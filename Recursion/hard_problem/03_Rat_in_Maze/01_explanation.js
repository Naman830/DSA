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

/*
Complexity
For an n × n maze, there can be exponentially many possible paths.

1. Best Case
The destination is found immediately.
Time: O(n²) worst-case cell validation along a direct path
Space: O(n²) recursion/visited space

2. Average Case
We explore several possible paths.
Time: approximately O(4^(n²))
Space: O(n²)

3. Worst Case
Almost every possible route is explored.
Time: O(4^(n²))
Space: O(n²)

In an optimized implementation, each cell is prevented from being visited twice within the current path, but because we undo visited during backtracking, the same cell can participate in different paths. That's why the overall number of paths can still be exponential.
*/
