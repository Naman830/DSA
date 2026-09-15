/*
Given two binary trees, p and q, check whether they are exactly the same.

Two trees are the same if:

They have the same structure.
Corresponding nodes have the same values.

Example
Tree p:          Tree q:

    1                1
   / \              / \
  2   3            2   3

Output: true

Tree p:          Tree q:

    1                1
   / \              / \
  2   3            2   4
Output: false

The explanation and solutions follow the structure in your DSA notes.
*/

/*
. Key observation
Compare the two trees node by node.
If both nodes are null, they are the same at that position.
If only one node is null, the structures are different.
If their values differ, the trees are different.

Otherwise, compare their left subtrees and right subtrees.
The main idea: We need to verify both the values and the structure.
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  // Case 1: Both nodes are null.
  if (p === null && q === null) {
    return true;
  }

  // Case 2: One node is null.
  if (p === null || q === null) {
    return false;
  }

  // Case 3: Values are different.
  if (p.val !== q.val) {
    return false;
  }

  // Case 4: Compare both subtrees.
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example 1: Same trees
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q)); // true

// Example 2: Different trees
const a = new TreeNode(1);
a.left = new TreeNode(2);

const b = new TreeNode(1);
b.right = new TreeNode(2);

console.log(isSameTree(a, b)); // false
