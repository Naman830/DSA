/*
The top view of a binary tree contains the nodes that are visible when you look at the tree from above.

Example:

        1
       / \
      2   3
       \ / \
        4   5
             \
              6

Top view:
2  1  3  6

The important concept here is Horizontal Distance (HD):
             1 (HD = 0)
           /            \
     2 (HD = -1)      3 (HD = +1)

For every node:

Left child  → HD - 1
Right child → HD + 1

For each horizontal distance, the first node encountered from the top belongs to the top view.
*/

/*
:- Key observation / intuition
Root starts at HD = 0.
Going left decreases HD by 1.
Going right increases HD by 1.

We need only one node per horizontal distance.
If multiple nodes have the same HD, we want the topmost one.
Therefore, BFS / Level Order Traversal is ideal because it visits nodes level by level.
Store a value in the Map only the first time an HD appears.
*/
