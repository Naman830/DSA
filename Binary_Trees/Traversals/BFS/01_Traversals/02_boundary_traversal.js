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

/*
:- Key Observation

The easiest way to remember it:
        ROOT
          ↓
   LEFT BOUNDARY [go left left if left not right]
          ↓
      ALL LEAVES [inorder]
          ↓
   RIGHT BOUNDARY [go right righ if right not left]
      (REVERSE)

Important rules:

Don't add a leaf twice.
Left boundary → move left first, otherwise right.
Right boundary → move right first, otherwise left.
Right boundary is added bottom → top.
Leaf nodes are added left → right.
*/
