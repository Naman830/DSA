/*
Suppose we have:

          50
         /  \
        7    2
       / \  / \
      3  5 1   1

At 50:
childSum = 7 + 2 = 9

Since:
50 > 9

we cannot decrease 50 to 9.
So we push 50 into one child:

          50
         /  \
        50   2
       / \  / \
      3  5 1   1

Then recursively fix the left subtree.
Eventually, after processing everything, the values are adjusted so every parent satisfies:

parent = left + right

| Complexity | Value    |
| ---------- | -------- |
| **Time**   | **O(n)** |
| **Space**  | **O(h)** |
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function changeTree(root) {
  // Base case
  if (root === null) {
    return;
  }

  // ---------------------------------------
  // Step 1: Calculate sum of children
  // ---------------------------------------

  let childSum = 0;

  if (root.left !== null) {
    childSum += root.left.val;
  }

  if (root.right !== null) {
    childSum += root.right.val;
  }

  // ---------------------------------------
  // Step 2:
  // If children sum is greater than parent,
  // increase parent to match children.
  // ---------------------------------------

  if (childSum >= root.val) {
    root.val = childSum;
  }

  // ---------------------------------------
  // Step 3:
  // If parent is greater than children,
  // propagate parent's value to a child.
  // ---------------------------------------
  else {
    if (root.left !== null) {
      root.left.val = root.val;
    } else if (root.right !== null) {
      root.right.val = root.val;
    }
  }

  // ---------------------------------------
  // Step 4:
  // Recursively fix both subtrees
  // ---------------------------------------

  changeTree(root.left);
  changeTree(root.right);

  // ---------------------------------------
  // Step 5:
  // Recalculate current node using
  // the final values of its children.
  // ---------------------------------------

  let total = 0;

  if (root.left !== null) {
    total += root.left.val;
  }

  if (root.right !== null) {
    total += root.right.val;
  }

  // Only update non-leaf nodes
  if (root.left !== null || root.right !== null) {
    root.val = total;
  }
}

// ---------------------------------------
// Example
// ---------------------------------------

const root = new TreeNode(50);

root.left = new TreeNode(7);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);

changeTree(root);

console.log(root);
