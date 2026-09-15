/*
1. Explain the question
Given a binary tree, check whether it is symmetric around its center.
In simple words, the left subtree should be a mirror image of the right subtree.

Example:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
Output: true


        1
       / \
      2   2
     /     \
    3       3
Output: false
*/

/*
. Key observation
Compare the left child of one node with the right child of the other.
Compare the right child of one node with the left child of the other.

Two nodes are mirrors if:
Both are null.
Neither is null, and their values are equal.
Their opposite children are also mirrors.
*/

// Ease:- This question is similar as same tree just we have not to take main root we have to make both left and right side childeren as a root and then compare them
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Optimal Recursive DFS
function isSymmetric(root) {
  if (root === null) {
    return true;
  }

  function isMirror(left, right) {
    // Both nodes are null: they are mirrors.
    if (left === null && right === null) {
      return true;
    }

    // Only one node is null: not mirrors.
    if (left === null || right === null) {
      return false;
    }

    // Values must be equal.
    if (left.val !== right.val) {
      return false;
    }

    // Compare opposite children.
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
}

// Example 1: Symmetric tree
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);

console.log(isSymmetric(root1)); // true

// Example 2: Not symmetric
const root2 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3)),
);

console.log(isSymmetric(root2)); // false
