/*
1. Explain the question

A binary tree is balanced if, for every node, the height difference between its left and right subtree is at most 1.

For every node:
|height(left) - height(right)| <= 1

Example of a balanced tree:

        1
       / \
      2   3
     / \
    4   5

At every node, the left and right subtree heights differ by at most 1.
*/

/*
Key observation

We need the height of each subtree.
While calculating height, we can also check whether the subtree is balanced.
If a subtree is unbalanced, there is no need to calculate further.
The optimal approach combines height calculation + balance checking in one DFS traversal.
We return -1 whenever an unbalanced subtree is found.
*/

/*
1. Brute Force — Height separately for every node
Time: O(n²) in the worst case
Space: O(h) recursion stack

2. Better — Store heights
Time: O(n)
Space: O(n) for the height map + O(h) recursion stack
*/

// 3. Optimal — Single DFS
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  // Returns height if balanced
  // Returns -1 if unbalanced
  function dfs(node) {
    // Empty tree has height 0
    if (node === null) {
      return 0;
    }

    // Calculate left subtree height
    const leftHeight = dfs(node.left);

    // If left subtree is unbalanced,
    // propagate -1 immediately
    if (leftHeight === -1) {
      return -1;
    }

    // Calculate right subtree height
    const rightHeight = dfs(node.right);

    // If right subtree is unbalanced,
    // propagate -1 immediately
    if (rightHeight === -1) {
      return -1;
    }

    // Check balance condition
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    // Return height of current subtree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // If dfs returns -1, tree is unbalanced
  return dfs(root) !== -1;
}

// Create tree
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Check balance
console.log(isBalanced(root)); // true
