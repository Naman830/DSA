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

For every non-leaf node, we need:
node.val = left.val + right.val

But we are not allowed to decrease values.

So:

If left + right > node.val → increase node.val.
If node.val > left + right → push the extra value into one child.

Recursively do the same for both subtrees.
After fixing the children, update the current node to exactly left + right.
*/

// Optimal Solution
