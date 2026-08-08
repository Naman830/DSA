/*
DFS = Depth First Search

DFS is a graph traversal technique where we:
Go as deep as possible along one path, then backtrack and explore the next path.
*/

/*
    1
   / \
  2   3
 / \
4   5

Starting from [1]: 1 → 2 → 4 → 5 → 3

Key observations
Use a stack to implement DFS.
A recursive DFS uses the call stack internally.
Use a visited array/set to avoid visiting a node multiple times.
For an undirected graph, every edge appears in both adjacency lists.
*/
