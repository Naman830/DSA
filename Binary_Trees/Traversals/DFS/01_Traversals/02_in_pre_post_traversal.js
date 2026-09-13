// The idea is to traverse a binary tree only once and collect all three traversals at the same time.

/*
     1
    / \
   2   3
  / \
 4   5

We process it three times:
1st time → Preorder  → Root
2nd time → Inorder   → Left → Root
3rd time → Postorder → Left → Root → Right

A simple way to remember:
Preorder  = 1st time we see the node
Inorder   = 2nd time we see the node
Postorder = 3rd time we see the node

we use: [node, state]
*/
