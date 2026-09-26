/*
Explain the question
Given a Binary Tree and a target value, return the path from the root node to the target node.

Example:
        1
       / \
      2   3
     / \
    4   5
       /
      6

Target = 6

Output:
[1, 2, 5, 6]

We start at the root 1 and find the sequence of nodes that leads to 6.
*/

/*
Key observation

We can use DFS to search for the target.
While moving down the tree, add the current node to path.

If the current node is the target → we found the path.

Search the left and right subtrees.

If the target isn't found through the current node, backtrack by removing that node from path.

This is the important pattern: [WE WILL FOLLOW THE INORDER TRAVERSAL FOR FAST & EASY WAY]
Choose → Explore → Undo
*/
