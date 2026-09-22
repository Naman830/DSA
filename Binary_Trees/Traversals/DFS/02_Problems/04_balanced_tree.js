/*
1. Explain the question

A binary tree is balanced if, for every node, the height difference between its left and right subtree is at most 1.

For every node:
|height(left) - height(right)| <= 1

Example of a balanced tree:

        1
       / \
      2   3
     / \
    4   5

At every node, the left and right subtree heights differ by at most 1.
*/

/*
Key observation

We need the height of each subtree.
While calculating height, we can also check whether the subtree is balanced.
If a subtree is unbalanced, there is no need to calculate further.
The optimal approach combines height calculation + balance checking in one DFS traversal.
We return -1 whenever an unbalanced subtree is found.
*/

/*
1. Brute Force — Height separately for every node
Time: O(n²) in the worst case
Space: O(h) recursion stack

2. Better — Store heights
Time: O(n)
Space: O(n) for the height map + O(h) recursion stack
*/
