/*
A Binary Tree is a data structure where each node can have at most two children:

Left Child
Right Child

The topmost node is called the Root.
A node without children is called a Leaf Node.
Trees are created using objects (nodes) connected with references.
*/

/*
Representation 1 (Most Common) — Using Nodes (Pointers)
Visual Representation
    root
     │
     ▼
    [10]
   /   \
  5     15
 / \      \
2  7      20

*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating Nodes
const root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

root.right.right = new TreeNode(20);

// Testing
console.log(root);
