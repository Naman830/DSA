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
