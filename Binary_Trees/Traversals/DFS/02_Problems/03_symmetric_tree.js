/*
1. Explain the question
Given a binary tree, check whether it is symmetric around its center.
In simple words, the left subtree should be a mirror image of the right subtree.

Example:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
Output: true


        1
       / \
      2   2
     /     \
    3       3
Output: false
*/

/*
. Key observation
Compare the left child of one node with the right child of the other.
Compare the right child of one node with the left child of the other.

Two nodes are mirrors if:
Both are null.
Neither is null, and their values are equal.
Their opposite children are also mirrors.
*/
