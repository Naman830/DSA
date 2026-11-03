/*
You are given a 2D grid heights, where each cell represents the height of a particular point.

You need to travel from the top-left cell (0, 0) to the bottom-right cell (m-1, n-1).

You can move in four directions:
- Up
- Down
- Left
- Right

The effort of a path is defined as the maximum absolute difference in heights between two consecutive cells.

Your goal is to find a path that minimizes this maximum effort.

Example:
const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5]
];

Output:
2

Why?
One possible path is:
1 → 2 → 2 → 2 → 5


Height differences:
|1 - 2| = 1
|2 - 2| = 0
|2 - 2| = 0
|2 - 5| = 3

This path has effort 3.

But another path is:
1 → 3 → 5 → 3 → 2 → 2 → 5
Its maximum difference is 2.

Therefore, the minimum possible effort is 2.
*/

/*
Key observations
1. We can move in four directions from every cell.
2. The cost of moving between two adjacent cells is the absolute difference between their heights.
3. We don't need the path with the minimum sum of differences.
4. We need the path with the minimum maximum difference.
5. This is a graph shortest-path problem, which can be solved optimally using Dijkstra's algorithm.
*/
