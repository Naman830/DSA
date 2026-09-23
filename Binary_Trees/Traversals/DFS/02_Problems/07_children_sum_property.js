/*
The Children Sum Property says:
For every non-leaf node, its value must be equal to the sum of its left and right child values.

For a missing child, consider its value as 0.

Example:
        10
       /  \
      4    6
     / \    \
    2   2    6

10 = 4 + 6 ✅
4 = 2 + 2 ✅
6 = 0 + 6 ✅

So the tree satisfies the property.
*/

/*
:- Key Observation
We only need to check non-leaf nodes.

For every node:
left value = 0 if left child doesn't exist.
right value = 0 if right child doesn't exist.

Check:
node.val === left.val + right.val

We must check this for every node, so a tree traversal is required.
Once any node violates the property, we can immediately return false.
*/
