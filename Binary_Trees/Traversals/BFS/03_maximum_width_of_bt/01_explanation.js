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
