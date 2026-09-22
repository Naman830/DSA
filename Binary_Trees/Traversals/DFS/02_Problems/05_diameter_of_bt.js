/*
1. Explain the question
The diameter of a binary tree is the longest path between any two nodes in the tree.

The path can pass through the root, but it does not have to.

For example:

        1
       / \
      2   3
     / \
    4   5

The longest path is:

4 → 2 → 1 → 3

So the diameter is:
3 edges
Important: Diameter is usually measured in number of edges, not number of nodes.
*/

/*
Key observation

For every node, the longest path passing through that node is:
height(left subtree) + height(right subtree)
We calculate the height of every subtree.
While calculating height, we simultaneously keep track of the maximum diameter.
The optimal solution avoids repeatedly calculating subtree heights.
*/

/*
A. Brute Force

| Complexity | Value                    |
| ---------- | ------------------------ |
| Time       | **O(N²)** worst case     |
| Space      | **O(N)** recursion stack |

The problem is that height() gets called repeatedly for the same subtrees.
*/

/*
Optimal Solution

              node
             /    \
            /      \
     leftHeight   rightHeight
            \      /
             \    /
            diameter

Time  : O(N)
Space : O(H)
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  // Stores the maximum diameter found so far
  let diameter = 0;

  function dfs(node) {
    // Base case:
    // An empty node has height 0
    if (node === null) {
      return 0;
    }

    // Find height of left subtree
    const leftHeight = dfs(node.left);

    // Find height of right subtree
    const rightHeight = dfs(node.right);

    // Longest path passing through current node
    // is left height + right height
    const currentDiameter = leftHeight + rightHeight;

    // Update global maximum diameter
    diameter = Math.max(diameter, currentDiameter);

    // Return height of current subtree
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Start DFS from root
  dfs(root);

  return diameter;
}

// -------------------------
// Create Binary Tree
// -------------------------

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// -------------------------
// Find Diameter
// -------------------------

console.log(diameterOfBinaryTree(root)); // 3
