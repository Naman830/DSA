/*
Explain the Question
Given a binary tree, we need to find:

Right View: nodes visible when looking at the tree from the right side.
Left View: nodes visible when looking at the tree from the left side.

Example:
          1
        /   \
       2     3
      / \     \
     4   5     6
        /
       7
Left View  = [1, 2, 4, 7]
Right View = [1, 3, 6, 7]

The key idea is that we need exactly one node from every level.
*/

/*
:- Key Observation
Every depth/level contributes only one node.
For Left View, we want the first node encountered at each level.
For Right View, we want the last node encountered at each level.
BFS level-order traversal makes this straightforward.

DFS can do it with less code:
Right view → visit right before left.
Left view → visit left before right.
If result.length === level, we have reached that level for the first time.
*/


