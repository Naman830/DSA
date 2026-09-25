/*
The Bottom View of a Binary Tree means:
Imagine you are looking at the binary tree from the bottom. We need to return the nodes that would be visible.

We assign every node a Horizontal Distance (HD):
Root → HD = 0
Left child → HD - 1
Right child → HD + 1

For example:

           1 (0)
         /       \
     2 (-1)      3 (1)
       \         /
       4 (0)   5 (0)

Horizontal Distance:

-1        0        1
 2       1,4,5      3

At HD = 0, multiple nodes overlap. Since we are looking from the bottom, the deeper/later node should be visible.

So the bottom view can be:

[2, 5, 3]
*/
