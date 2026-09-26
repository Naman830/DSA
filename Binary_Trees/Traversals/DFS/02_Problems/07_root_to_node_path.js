/*
Explain the question
Given a Binary Tree and a target value, return the path from the root node to the target node.

Example:
        1
       / \
      2   3
     / \
    4   5
       /
      6

Target = 6

Output:
[1, 2, 5, 6]

We start at the root 1 and find the sequence of nodes that leads to 6.
*/

/*
Key observation

We can use DFS to search for the target.
While moving down the tree, add the current node to path.

If the current node is the target → we found the path.

Search the left and right subtrees.

If the target isn't found through the current node, backtrack by removing that node from path.

This is the important pattern: [WE WILL FOLLOW THE INORDER TRAVERSAL FOR FAST & EASY WAY]
Choose → Explore → Undo
*/

// Optimal Solution — DFS + Backtracking
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function rootToNodePath(root, target) {
  const path = [];

  function dfs(node) {
    // Base case
    if (node === null) {
      return false;
    }

    // Add current node to our path
    path.push(node.val);

    // We found the target
    if (node.val === target) {
      return true;
    }

    // Search left and right subtrees
    if (dfs(node.left) || dfs(node.right)) {
      return true;
    }

    // Target was not found through this node,
    // so remove it before going back.
    path.pop();

    return false;
  }

  // Start DFS from root
  if (dfs(root)) {
    return path;
  }

  // Target doesn't exist
  return [];
}

// ----------------------
// Create Binary Tree
// ----------------------

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.left.right.left = new TreeNode(6);

console.log(rootToNodePath(root, 6));

// Output:
// [1, 2, 5, 6]
