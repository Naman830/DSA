/*
Key Observation 🧠

stack1 → process nodes.
stack2 → store nodes in reverse-postorder.
Pop from stack2 → get Left → Right → Root.

For every node:
Pop from stack1
Push into stack2
Push its left, then right child into stack1

Pattern:
stack1 → stack2 → answer

Approach:-
Start with the root in stack1.

Take a node from stack1, put it into stack2, then push its left and right children into stack1. Finally, pop everything from stack2 to get postorder

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

var postorderTraversal = function (root) {
  if (root === null) return [];

  let stack1 = [root];
  let stack2 = [];
  let result = [];

  while (stack1.length > 0) {
    // Take node from stack1
    let node = stack1.pop();

    // Put it into stack2
    stack2.push(node);

    // Push left first
    if (node.left) {
      stack1.push(node.left);
    }

    // Push right after left
    if (node.right) {
      stack1.push(node.right);
    }
  }

  // Pop from stack2 to get:
  // Left → Right → Root
  while (stack2.length > 0) {
    result.push(stack2.pop().val);
  }

  return result;
};

// Create tree:
//
//        1
//       / \
//      2   3
//     / \
//    4   5
//
// Postorder = 4 → 5 → 2 → 3 → 1

let root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(postorderTraversal(root));
// [4, 5, 2, 3, 1]
