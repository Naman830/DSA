/*
1. Question

In Vertical Order Traversal of a Binary Tree, we group nodes according to their horizontal position (column).

Root → column 0
Left child → column -1
Right child → column +1

Then return the columns from left to right.

                         1
                       (0,0)
                      /     \
                     /       \
                 2             3
              (1,-1)         (1,1)
               /  \           /  \
              /    \         /    \
             4      6       5      7
          (2,-2)  (2,0)   (2,0)  (2,2)

Now imagine vertical lines passing through the tree:
 col = -2      col = -1       col = 0       col = 1       col = 2
    |              |              |             |             |
    |              |              1             |             |
    |              2              |             3             |
    4              |            6   5           |             7
    |              |              |             |             |
*/

/*
:-Key Observation
We need to track both row and column of every node.
Root starts at (row = 0, col = 0).
Left child becomes (row + 1, col - 1).
Right child becomes (row + 1, col + 1).
Store nodes based on their column.
For the same column, sort by row first, then by node value when rows are also equal.
BFS makes it easy to visit every node while tracking coordinates.
*/
