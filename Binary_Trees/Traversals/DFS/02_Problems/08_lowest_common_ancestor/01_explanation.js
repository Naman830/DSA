/*
Explain the question
Given a Binary Tree and two nodes p and q, find their Lowest Common Ancestor.
The LCA is the lowest/deepest node in the tree that has both p and q as descendants.
A node is allowed to be a descendant of itself.

Example:
             3
           /   \
          5     1
         / \   / \
        6   2 0   8
           / \
          7   4

For:
p = 5
q = 1
Answer: 3

Because 3 is the lowest node whose subtree contains both 5 and 1.
For:
p = 5
q = 4
Answer: 5

Because 5 itself can be the ancestor of 4.
*/

/*
:-Key observation

If we reach null, there is nothing to find.
If the current node is p or q, return that node.

Recursively search the left subtree.
Recursively search the right subtree.

If both left and right return a node, the current node is where p and q meet → this is the LCA.
If only one side returns a node, propagate that node upward.

The core logic is:
left != null AND right != null
              ↓
        current node = LCA
*/
