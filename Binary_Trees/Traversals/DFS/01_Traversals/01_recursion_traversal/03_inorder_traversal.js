/*
In Inorder Traversal, you always visit nodes in this order:

Go to the left subtree
Visit the current node (root)
Go to the right subtree
*/

class treeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  const result = [];

  function dfs(node) {
    // Base Case
    if (node === null) return;

    // 1. Traverse Left Subtree
    dfs(node.left);

    // 2. Visit Current Node
    result.push(node.val);

    // 3. Traverse Right Subtree
    dfs(node.right);
  }

  dfs(root);
  return result;
}

/*
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
*/

let root = new treeNode(1);

root.left = new treeNode(2);
root.left.left = new treeNode(4);
root.left.right = new treeNode(5);

root.right = new treeNode(3);
root.right.left = new treeNode(6);
root.right.right = new treeNode(7);

console.log(inorderTraversal(root)); // [4, 2, 5, 1, 6, 3, 7]

/*
| Case    | Time     | Space    |
| ------- | -------- | -------- |
| Best    | **O(n)** | **O(h)** |
| Average | **O(n)** | **O(h)** |
| Worst   | **O(n)** | **O(n)** |

*/
