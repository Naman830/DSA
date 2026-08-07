/*
A graph representation is the way we store a graph in memory so that we can easily perform operations like traversal (BFS, DFS), finding paths, etc.

There are 2 common ways to represent a graph:
1. Adjacency Matrix
2. Adjacency List ✅ (Most commonly used)
*/

/*
1. Adjacency Matrix
Create a 2D array (matrix) of size V × V.

matrix[i][j] = 1 → Edge exists
matrix[i][j] = 0 → No edge

Graph          Edge
0 ----- 1 ---> 0-1
|       | ---> 0-2
|       | ---> 1-3
2 ----- 3 ---> 2-3

     Matrix
     0 1 2 3
0 -> 0 1 1 0
1 -> 1 0 0 1
2 -> 1 0 0 1
3 -> 0 1 1 0
*/
