/*
In Postorder Traversal, we visit:

Left subtree
Right subtree
Root node

The root is always visited last.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function postorderTraversal(root) {
  const result = [];

  function dfs(node) {
    // Base case
    if (node === null) return;

    // Visit Left
    dfs(node.left);

    // Visit Right
    dfs(node.right);

    // Visit Root
    result.push(node.val);
  }

  dfs(root);

  return result;
}

/*
        1
       / \
      2   3
     / \
    4   5
*/

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);

// Test
console.log(postorderTraversal(root)); // [4, 5, 2, 3, 1]

/*
| Case    | Time     | Space    |
| ------- | -------- | -------- |
| Best    | **O(n)** | **O(h)** |
| Average | **O(n)** | **O(h)** |
| Worst   | **O(n)** | **O(n)** |

*/
