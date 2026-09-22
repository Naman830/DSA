/*
Explanation:-

A path is a sequence of connected nodes where you can start and end at any two nodes.
The path does not need to pass through the root.

Our goal is to find the maximum possible sum of node values along any path.

Example:
        1
       / \
      2   3
         / \
        4   5

The maximum path is:
4 → 3 → 5

Sum:
4 + 3 + 5 = 12

So the answer is 12.
*/

// ======================================================================================
// ======================================================================================

/*
1. Key Observation
At every node, there are two different things we need to calculate:

=================================================
A. Value returned to the parent
=================================================

A node can give its parent only one side:

       node
      /    \
    left   right

The parent cannot take both branches because that would create a branching path.

So we return:
node.val + max(leftGain, rightGain)

=================================================
B. Maximum path passing THROUGH the current node
=================================================

Here we can take both sides:

        node
       /    \
    left    right

path = left + node + right

So:

leftGain + node.val + rightGain
We keep a global maxSum to store the best path found anywhere in the tree.

Important
If a subtree gives a negative contribution, we don't need it:
Math.max(0, gain)

So:
leftGain  = max(0, left subtree gain)
rightGain = max(0, right subtree gain)
*/

/*
1. Brute Force
Time: O(N²) in the worst case
Space: O(H) recursion stack

2. Better Solution
Time: O(N)
Space: O(H)
*/

// 3. Optimal Solution
/*
| Complexity | Value  |
| ---------- | ------ |
| Time       | `O(N)` |
| Space      | `O(H)` |
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(root) {
  // Stores the maximum path sum found anywhere in the tree
  let maxSum = -Infinity;

  function dfs(node) {
    // Base case
    if (node === null) {
      return 0;
    }

    /*
      Get the maximum contribution from the left subtree.

      If the contribution is negative,
      we simply don't take that subtree.
    */
    const leftGain = Math.max(0, dfs(node.left));

    /*
      Same for the right subtree.
    */
    const rightGain = Math.max(0, dfs(node.right));

    /*
      A path can pass through the current node
      and take BOTH left and right sides.

             left
               \
                node
               /
             right

      So calculate the complete path through this node.
    */
    const currentPath = leftGain + node.val + rightGain;

    // Update the global maximum answer
    maxSum = Math.max(maxSum, currentPath);

    /*
      When returning to the parent,
      we can take ONLY ONE side.

      Otherwise the path would branch.
    */
    return node.val + Math.max(leftGain, rightGain);
  }

  // Start DFS from root
  dfs(root);

  return maxSum;
}

// -------------------------
// Create Binary Tree
// -------------------------

const root = new TreeNode(1);

root.left = new TreeNode(2);

root.right = new TreeNode(3);

root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

// -------------------------
// Output
// -------------------------

console.log(maxPathSum(root)); // 12
