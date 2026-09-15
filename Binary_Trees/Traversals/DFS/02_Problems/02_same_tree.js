/*
Given two binary trees, p and q, check whether they are exactly the same.

Two trees are the same if:

They have the same structure.
Corresponding nodes have the same values.

Example
Tree p:          Tree q:

    1                1
   / \              / \
  2   3            2   3

Output: true

Tree p:          Tree q:

    1                1
   / \              / \
  2   3            2   4
Output: false

The explanation and solutions follow the structure in your DSA notes.
*/

/*
. Key observation
Compare the two trees node by node.
If both nodes are null, they are the same at that position.
If only one node is null, the structures are different.
If their values differ, the trees are different.

Otherwise, compare their left subtrees and right subtrees.
The main idea: We need to verify both the values and the structure.
*/
