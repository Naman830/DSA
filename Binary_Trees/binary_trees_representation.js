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

/*
Representation 2 — Using an Array
This representation is mainly used for Complete Binary Trees (like Heaps).

        10
       /  \
      5    15
     / \     \
    2   7     20
*/

const tree = [10, 5, 15, 2, 7, null, 20];

/*
For a node at index i:

Left Child → 2 * i + 1
Right Child → 2 * i + 2
Parent → Math.floor((i - 1) / 2)

Example:
Index : 0  1  2  3  4   5     6
Value :10  5 15  2  7 null   20
*/

/*
Time & Space Complexity
Node Representation

| Operation      | Best | Average | Worst |
| -------------- | ---- | ------- | ----- |
| Create Node    | O(1) | O(1)    | O(1)  |
| Connect Nodes  | O(1) | O(1)    | O(1)  |
| Space per Node | O(1) | O(1)    | O(1)  |

Array Representation
| Operation       | Best | Average | Worst |
| --------------- | ---- | ------- | ----- |
| Access by Index | O(1) | O(1)    | O(1)  |
| Space           | O(n) | O(n)    | O(n)  |
*/
