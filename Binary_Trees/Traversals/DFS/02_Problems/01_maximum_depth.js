/*
You are given the root of a binary tree. Find its maximum depth, which means the number of nodes on the longest path from the root to a leaf.

        1
       / \
      2   3
     /
    4

The longest path is 1 → 2 → 4.
Therefore, the maximum depth is 3.
*/

/*
Key observation:-
Every node has a left subtree and a right subtree.
The maximum depth of a node is 1 + the maximum depth of its deeper subtree.
If a node is null, its depth is 0.
We can solve the problem using recursion or by traversing the tree level by level.

The main formula is:
depth(node) = 1 + max(depth(left), depth(right))
*/
