/*
The Children Sum Property says:
For every non-leaf node, its value must be equal to the sum of its left and right child values.

For a missing child, consider its value as 0.

Example:
        10
       /  \
      4    6
     / \    \
    2   2    6

10 = 4 + 6 ✅
4 = 2 + 2 ✅
6 = 0 + 6 ✅

So the tree satisfies the property.
*/

/*
:- Key Observation

For every non-leaf node, we need:
node.val = left.val + right.val

But we are not allowed to decrease values.

So:

If left + right > node.val → increase node.val.
If node.val > left + right → push the extra value into one child.

Recursively do the same for both subtrees.
After fixing the children, update the current node to exactly left + right.
*/

// OPTIMAL SOLUTION
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function changeTree(root) {
  // Empty tree
  if (root === null) {
    return;
  }

  // Leaf node doesn't need any change
  if (root.left === null && root.right === null) {
    return;
  }

  // Calculate current children's sum
  const leftValue = root.left ? root.left.val : 0;
  const rightValue = root.right ? root.right.val : 0;

  const childSum = leftValue + rightValue;

  // ------------------------------------------------
  // Case 1:
  // Children sum is greater than parent.
  // Increase the parent to match children.
  // ------------------------------------------------
  if (childSum > root.val) {
    root.val = childSum;
  }

  // ------------------------------------------------
  // Case 2:
  // Parent is greater than children.
  // We cannot decrease the parent.
  // So push the parent's value into a child.
  // ------------------------------------------------
  else if (childSum < root.val) {
    if (root.left) {
      // Put the extra value into the left child
      root.left.val = root.val;
    } else if (root.right) {
      // If left doesn't exist, use right child
      root.right.val = root.val;
    }
  }

  // Recursively fix both subtrees
  changeTree(root.left);
  changeTree(root.right);

  // ------------------------------------------------
  // After children are fixed,
  // make current node equal to their sum.
  // ------------------------------------------------
  const newLeftValue = root.left ? root.left.val : 0;
  const newRightValue = root.right ? root.right.val : 0;

  root.val = newLeftValue + newRightValue;
}

// Example Tree:
//
//          50
//         /  \
//        7    2
//       / \  / \
//      3  5 1   1

const root = new TreeNode(50);

root.left = new TreeNode(7);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);

// Modify the tree
changeTree(root);

console.log(root);
