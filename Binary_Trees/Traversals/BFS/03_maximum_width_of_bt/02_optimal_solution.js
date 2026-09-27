/*
Optimal Solution — BFS + normalized indexing

Instead of carrying huge indices, subtract the first index of the current level:
currentIndex = index - minimumIndex

| Complexity       | Value  | Why?                                 |
| ---------------- | ------ | ------------------------------------ |
| **Time**         | `O(N)` | Every node is processed exactly once |
| **Space**        | `O(W)` | BFS queue stores nodes of a level    |
| Worst-case space | `O(N)` | A level can contain `O(N)` nodes     |
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function widthOfBinaryTree(root) {
  if (root === null) return 0;

  // Each element contains:
  // [node, position]
  let queue = [[root, 0]];

  let maxWidth = 0;

  while (queue.length > 0) {
    const size = queue.length;

    // First index of current level.
    // We subtract this from every index to keep
    // the position numbers small.
    const minIndex = queue[0][1];

    let first = 0;
    let last = 0;

    const nextLevel = [];

    for (let i = 0; i < size; i++) {
      const [node, index] = queue[i];

      // Normalize the index.
      const currentIndex = index - minIndex;

      // First node of this level.
      if (i === 0) {
        first = currentIndex;
      }

      // Last node of this level.
      if (i === size - 1) {
        last = currentIndex;
      }

      // Left child position.
      if (node.left !== null) {
        nextLevel.push([node.left, 2 * currentIndex + 1]);
      }

      // Right child position.
      if (node.right !== null) {
        nextLevel.push([node.right, 2 * currentIndex + 2]);
      }
    }

    // Width = last position - first position + 1
    const currentWidth = last - first + 1;

    maxWidth = Math.max(maxWidth, currentWidth);

    queue = nextLevel;
  }

  return maxWidth;
}

// --------------------
// Example
// --------------------

const root = new TreeNode(1);

root.left = new TreeNode(3);
root.right = new TreeNode(2);

root.left.left = new TreeNode(5);
root.right.right = new TreeNode(9);

console.log(widthOfBinaryTree(root)); // 4
