/*
1. Explain the question
Boundary Traversal means traversing the nodes lying on the outer boundary of a binary tree in anti-clockwise direction.

The boundary consists of:

Root
Left Boundary — excluding leaf nodes
All Leaf Nodes — from left to right [Means doing inorder traversal in it]
Right Boundary — excluding leaf nodes, in reverse order

Example
             1
           /   \
          2     7
         / \   / \
        3   4 8   9
           / \
          5   6

Boundary traversal:
1 → 2 → 3 → 5 → 6 → 8 → 9 → 7
*/
