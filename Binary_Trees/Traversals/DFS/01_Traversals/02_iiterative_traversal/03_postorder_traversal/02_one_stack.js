/*
🧠 Key Observation
Think of the stack as remembering nodes that we cannot visit yet.

For every node:

i. Keep going left and push nodes into the stack.
ii. When there is no left child, look at the right child.
iii. If the right child exists and is not processed yet, go to the right subtree.
iv. Otherwise, pop and visit the node.

The important trick is:
lastVisited tells us whether the right subtree of the current node is already processed.

        1
       / \
      2   3
     / \
    4   5

Postorder: 4 → 5 → 2 → 3 → 1

🔑 Easy Pattern to Remember
Go Left → Push
       ↓
Check Right
       ↓
Right not processed → Go Right
Right processed      → Pop + Visit

TC: O(n)
SC: O(n)
*/

// Create a Binary Tree Node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function postorderTraversal(root) {
  const result = [];
  const stack = [];

  // If tree is empty
  if (root === null) {
    return result;
  }

  let current = root;
  let lastVisited = null;

  while (current !== null || stack.length > 0) {
    // 1. Go as left as possible
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Node at top of stack
    const node = stack[stack.length - 1];

    // 2. If right child exists and is not processed,
    //    go to the right subtree
    if (node.right !== null && node.right !== lastVisited) {
      current = node.right;
    }

    // 3. Otherwise, both left and right are processed
    //    so we can visit the current node
    else {
      result.push(node.val);

      // Remember this node as the last processed node
      lastVisited = stack.pop();
    }
  }

  return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Postorder:", postorderTraversal(root));
// Output: [4, 5, 2, 3, 1]
