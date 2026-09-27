// Recursive DFS
/*
| Complexity    |              Value | Reason                                      |
| ------------- | -----------------: | ------------------------------------------- |
| Time          |           **O(N)** | In the worst case, we visit every node      |
| Space         |           **O(H)** | Recursive call stack depends on tree height |
| Balanced tree | **O(log N)** space | Height is approximately `log N`             |
| Skewed tree   |     **O(N)** space | Height can become `N`                       |
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  // Base case:
  // 1. We reached the end of a branch
  // 2. We found p
  // 3. We found q
  if (root === null || root === p || root === q) {
    return root;
  }

  // Search for p and q in left subtree
  const left = lowestCommonAncestor(root.left, p, q);

  // Search for p and q in right subtree
  const right = lowestCommonAncestor(root.right, p, q);

  // If both sides return a node,
  // p and q were found on different sides.
  // Therefore current root is their LCA.
  if (left !== null && right !== null) {
    return root;
  }

  // Otherwise, return whichever side found p/q.
  // If both are null, this also returns null.
  return left !== null ? left : right;
}

// -------------------------
// Create Binary Tree
// -------------------------

const root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Find LCA of 5 and 4
const p = root.left; // Node 5
const q = root.left.right.right; // Node 4

const answer = lowestCommonAncestor(root, p, q);

console.log(answer.val);
// Output: 5
