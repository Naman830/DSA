/*
1. Explain the question
Boundary Traversal means traversing the nodes lying on the outer boundary of a binary tree in anti-clockwise direction.

The boundary consists of:

Root
Left Boundary — excluding leaf nodes
All Leaf Nodes — from left to right [Means doing inorder traversal in it]
Right Boundary — excluding leaf nodes, in reverse order

Example
             1
           /   \
          2     7
         / \   / \
        3   4 8   9
           / \
          5   6

Boundary traversal:
1 → 2 → 3 → 5 → 6 → 8 → 9 → 7
*/

/*
:- Key Observation

The easiest way to remember it:
        ROOT
          ↓
   LEFT BOUNDARY [go left left if left not right]
          ↓
      ALL LEAVES [inorder]
          ↓
   RIGHT BOUNDARY [go right righ if right not left]
      (REVERSE)

Important rules:

Don't add a leaf twice.
Left boundary → move left first, otherwise right.
Right boundary → move right first, otherwise left.
Right boundary is added bottom → top.
Leaf nodes are added left → right.
*/

/*
|             |     Time | Auxiliary Space |
| ----------- | -------: | --------------: |
| Brute       |     O(N) |            O(N) |
| Better      |     O(N) |            O(N) |
| **Optimal** | **O(N)** |        **O(H)** |
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function boundaryTraversalOptimal(root) {
  if (root === null) return [];

  const result = [];

  // Check whether node is a leaf
  function isLeaf(node) {
    return node.left === null && node.right === null;
  }

  // -----------------------------------------
  // Add left boundary
  // -----------------------------------------
  function addLeftBoundary(node) {
    let current = node.left;

    while (current !== null) {
      // Exclude leaves
      if (!isLeaf(current)) {
        result.push(current.val);
      }

      // Prefer left child
      if (current.left !== null) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  // -----------------------------------------
  // Add all leaves [inorder traversal]
  // -----------------------------------------
  function addLeaves(node) {
    if (node === null) return;

    if (isLeaf(node)) {
      result.push(node.val);
      return;
    }

    addLeaves(node.left);
    addLeaves(node.right);
  }

  // -----------------------------------------
  // Add right boundary
  // -----------------------------------------
  function addRightBoundary(node) {
    if (node === null) return;

    if (node.right !== null) {
      addRightBoundary(node.right);
    } else {
      addRightBoundary(node.left);
    }

    result.push(node.val);
  }

  // 1. Root
  result.push(root.val);

  // 2. Left boundary
  addLeftBoundary(root);

  // 3. Leaves
  addLeaves(root);

  // 4. Right boundary in reverse
  addRightBoundary(root);

  return result;
}

// -------------------------
// Create Binary Tree
// -------------------------

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(7);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.left.right.left = new TreeNode(5);
root.left.right.right = new TreeNode(6);

root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);

// -------------------------
// Output
// -------------------------

console.log(boundaryTraversalOptimal(root));
// [1, 2, 3, 5, 6, 8, 9, 7]
