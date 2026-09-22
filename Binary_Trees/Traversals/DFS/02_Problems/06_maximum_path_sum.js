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
