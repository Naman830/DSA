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

/*
1. For Right View, perform:
Root → Right → Left

2. For Left View, perform:
Root → Left → Right
*/

/*
| Complexity      |    Value | Why?                            |
| --------------- | -------: | ------------------------------- |
| Time            | **O(N)** | Each node is visited once       |
| Auxiliary Space | **O(H)** | Recursive call stack            |
| Output Space    | **O(H)** | One visible node per tree level |
*/

// Optimal Right View
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function rightSideView(root) {
  const result = [];

  function dfs(node, level) {
    // Base case
    if (node === null) return;

    // First node reached at this level
    // Because we visit RIGHT first,
    // this node belongs to the right view.
    if (level === result.length) {
      result.push(node.val);
    }

    // Visit right subtree first
    dfs(node.right, level + 1);

    // Then visit left subtree
    dfs(node.left, level + 1);
  }

  dfs(root, 0);

  return result;
}

// Creating tree
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.right = new TreeNode(6);

root.left.right.left = new TreeNode(7);

console.log("Right View:", rightSideView(root));
// [1, 3, 6, 7]
