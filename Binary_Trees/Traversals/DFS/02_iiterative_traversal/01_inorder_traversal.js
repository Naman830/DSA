/*
Key Observation 🧠

Inorder = Left → Root → Right
Use a stack to remember nodes.
Keep going left and push nodes.
When no left node → pop, visit, then go right.

Remember:
Go Left → Push → Pop & Visit → Go Right

Complexity:-
TC: O(n)
SC: O(n)
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];

  let current = root;

  // Continue while there are nodes to process
  while (current !== null || stack.length > 0) {
    // Go as far left as possible
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Visit the node
    current = stack.pop();
    result.push(current.val);

    // Now process the right subtree
    current = current.right;
  }

  return result;
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);

console.log(inorderTraversal(root));
// [4, 2, 5, 1, 3]

console.log(inorderTraversal(null));
// []
