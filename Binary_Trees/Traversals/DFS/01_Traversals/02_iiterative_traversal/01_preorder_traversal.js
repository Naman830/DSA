/*
Key Obervation:-

Preorder = Root → Left → Right
Use a stack to simulate recursion.
Push the right child first, then the left child because stack is LIFO.

Complexity:-
TC: O(n)
SC: O(n)
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var preorderTraversal = function (root) {
  // If tree is empty, return empty array
  if (root === null) return [];

  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    // Take the top node from stack
    let node = stack.pop();

    // Visit root
    result.push(node.val);

    // Push right first
    // so that left is processed first
    if (node.right !== null) {
      stack.push(node.right);
    }

    // Push left
    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return result;
};

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.right = new TreeNode(6);

// Test Cases
console.log(preOrderTraversal(null)); // []
console.log(preOrderTraversal(root)); // [1, 2, 4, 5, 3, 6]
