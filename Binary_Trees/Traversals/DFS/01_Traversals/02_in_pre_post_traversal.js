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

function allTraversals(root) {
  // Store the three traversals
  let preorder = [];
  let inorder = [];
  let postorder = [];

  // If tree is empty, return empty arrays
  if (root === null) {
    return [preorder, inorder, postorder];
  }

  // Stack stores [node, state]
  let stack = [];

  // Start with root and state 1
  stack.push([root, 1]);

  while (stack.length > 0) {
    // Remove the top element
    let [node, state] = stack.pop();

    // STATE 1: Preorder
    if (state === 1) {
      // Visit root
      preorder.push(node.val);

      // Move to state 2
      stack.push([node, 2]);

      // Process left subtree
      if (node.left !== null) {
        stack.push([node.left, 1]);
      }
    }

    // STATE 2: Inorder
    else if (state === 2) {
      // Visit root
      inorder.push(node.val);

      // Move to state 3
      stack.push([node, 3]);

      // Process right subtree
      if (node.right !== null) {
        stack.push([node.right, 1]);
      }
    }

    // STATE 3: Postorder
    else {
      // Visit root
      postorder.push(node.val);
    }
  }

  return [preorder, inorder, postorder];
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
