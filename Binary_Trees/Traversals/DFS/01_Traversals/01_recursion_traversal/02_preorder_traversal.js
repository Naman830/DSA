// Preorder Traversal means visiting the nodes of a binary tree in this order:
// Root → Left Subtree → Right Subtree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function preorderTraversal(root) {
  const result = [];

  // DFS Function
  function dfs(node) {
    // Base Case
    if (node === null) return;

    // 1. Visit Root
    result.push(node.val);

    // 2. Traverse Left
    dfs(node.left);

    // 3. Traverse Right
    dfs(node.right);
  }
  dfs(root);
  return result;
}

/*
        1
       / \
      2   3
     / \   \
    4   5   6
*/

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.right = new TreeNode(6);

// Test Cases
console.log(preorderTraversal(root)); // [1, 2, 4, 5, 3, 6]
console.log(preorderTraversal(null)); // []

/*
| Case    | Time     | Space    |
| ------- | -------- | -------- |
| Best    | **O(n)** | **O(h)** |
| Average | **O(n)** | **O(h)** |
| Worst   | **O(n)** | **O(n)** |
*/
