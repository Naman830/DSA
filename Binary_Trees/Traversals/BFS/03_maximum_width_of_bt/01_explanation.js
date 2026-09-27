/*
1. Explain the question
We need to find the maximum width among all levels of a binary tree.
The important part is that null/missing nodes between two existing nodes are counted.

Example:
             1
           /   \
          3     2
         /       \
        5         9

Level 0:        1                  width = 1
Level 1:      3   2                width = 2
Level 2:     5  X  X  9            width = 4

So the answer is: 4

Even though level 2 contains only 5 and 9, the two missing positions between them count toward the width.
*/

/*
. Key observation
Normal BFS lets us process the tree level by level.
But simply counting queue.length is not enough, because missing positions between nodes matter.

So we give every node a position/index, as if the tree were a complete binary tree.
For a node at index i:

left child  = 2 * i + 1
right child = 2 * i + 2
Then for every level: width = lastIndex - firstIndex + 1

For example:
Indices:
             0
           /   \
          1     2
         /       \
        3         6

Level 2:
index:   3   4   5   6
         5   X   X   9

width = 6 - 3 + 1
      = 4
*/
