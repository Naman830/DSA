/*
The top view of a binary tree contains the nodes that are visible when you look at the tree from above.

Example:

        1
       / \
      2   3
       \ / \
        4   5
             \
              6

Top view:
2  1  3  6

The important concept here is Horizontal Distance (HD):
             1 (HD = 0)
           /            \
     2 (HD = -1)      3 (HD = +1)

For every node:

Left child  → HD - 1
Right child → HD + 1

For each horizontal distance, the first node encountered from the top belongs to the top view.
*/

/*
:- Key observation / intuition
Root starts at HD = 0.
Going left decreases HD by 1.
Going right increases HD by 1.

We need only one node per horizontal distance.
If multiple nodes have the same HD, we want the topmost one.
Therefore, BFS / Level Order Traversal is ideal because it visits nodes level by level.
Store a value in the Map only the first time an HD appears.
*/

/*
| Complexity |  Optimal |
| ---------- | -------: |
| **Time**   | **O(N)** |
| **Space**  | **O(N)** |
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function topView(root) {
  if (root === null) return [];

  // Map: horizontalDistance -> node value
  const map = new Map();

  // Queue stores:
  // [node, horizontalDistance]
  const queue = [[root, 0]];

  // Avoid queue.shift() because it can be O(N)
  let index = 0;

  let minHD = 0;
  let maxHD = 0;

  while (index < queue.length) {
    const [node, hd] = queue[index++];

    // Because BFS goes level by level,
    // the first node at this HD is the topmost node.
    if (!map.has(hd)) {
      map.set(hd, node.val);
    }

    // Keep track of leftmost and rightmost HD
    minHD = Math.min(minHD, hd);
    maxHD = Math.max(maxHD, hd);

    // Left child → HD - 1
    if (node.left !== null) {
      queue.push([node.left, hd - 1]);
    }

    // Right child → HD + 1
    if (node.right !== null) {
      queue.push([node.right, hd + 1]);
    }
  }

  const result = [];

  // No sorting needed.
  // Simply go from minimum HD to maximum HD.
  for (let hd = minHD; hd <= maxHD; hd++) {
    if (map.has(hd)) {
      result.push(map.get(hd));
    }
  }

  return result;
}

// --------------------
// Example
// --------------------

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(topView(root));

// Output:
// [2, 1, 3, 6]
