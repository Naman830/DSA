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
