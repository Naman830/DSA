/*
The Rotten Oranges problem is a classic BFS (Breadth-First Search) problem on a matrix.

0 → Empty cell
1 → Fresh orange
2 → Rotten orange

1. Key Observations
We need the minimum time → BFS is ideal.
There can be multiple rotten oranges initially.
All rotten oranges spread simultaneously.
Therefore, put all rotten oranges into the queue initially.
Process the queue level by level → each level represents 1 minute.
At the end, if any fresh orange remains → return -1.

EXAMPLE:-

2 1 1           
1 1 0
0 1 1

After 1 minute:

2 2 1
2 1 0
0 1 1

After 2 minutes:

2 2 2
2 2 0
0 1 1
*/

// 1. Brute Force
/*
Scan entire matrix
Find fresh oranges next to rotten oranges
Make them rotten
Repeat

Time: O((m × n)²) in the worst case.
*/

// 2. Optimal Approach — Multi-Source BFS
/*
Why BFS?
Because BFS explores nodes based on their [distance] from the starting points.
Here: Distance = Time
*/
