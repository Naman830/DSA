/*
Adjacency List (Most Important)

Instead of storing all possible edges, store only the neighbors of each vertex.
Each node keeps a list of connected nodes

0 ----- 1
|       |
|       |
2 ----- 3

Adjacent list
  0 → [1,2]
  1 → [0,3]
  2 → [0,3]
  3 → [1,2]
*/
