/*
You are given the root of a binary tree. Find its maximum depth, which means the number of nodes on the longest path from the root to a leaf.

        1
       / \
      2   3
     /
    4

The longest path is 1 → 2 → 4.
Therefore, the maximum depth is 3.
*/

/*
Key observation:-
Every node has a left subtree and a right subtree.
The maximum depth of a node is 1 + the maximum depth of its deeper subtree.
If a node is null, its depth is 0.
We can solve the problem using recursion or by traversing the tree level by level.

The main formula is:
depth(node) = 1 + max(depth(left), depth(right))
*/

// Solution 1: Brute Force — Recursive DFS
// Time Complexity: O(n)
// Space Complexity: O(h) — The recursion stack stores at most the height of the tree.
// In the worst case, O(n).

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  // Base case: Empty tree has depth 0
  if (root === null) {
    return 0;
  }

  // Calculate the depth of the left subtree
  const leftDepth = maxDepth(root.left);

  // Calculate the depth of the right subtree
  const rightDepth = maxDepth(root.right);

  // Current node adds 1 to the deeper subtree
  return 1 + Math.max(leftDepth, rightDepth);
}

// Create the binary tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), null),
  new TreeNode(3),
);

// Call the function
console.log("Maximum Depth:", maxDepth(root));
