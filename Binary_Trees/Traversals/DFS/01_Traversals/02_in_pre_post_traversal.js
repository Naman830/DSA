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

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create tree
let root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Run all traversals
let [pre, ino, post] = allTraversals(root);

// Print results
console.log("Preorder:", pre);
console.log("Inorder:", ino);
console.log("Postorder:", post);
