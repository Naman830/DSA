/*
The Bottom View of a Binary Tree means:
Imagine you are looking at the binary tree from the bottom. We need to return the nodes that would be visible.

We assign every node a Horizontal Distance (HD):
Root → HD = 0
Left child → HD - 1
Right child → HD + 1

For example:

           1 (0)
         /       \
     2 (-1)      3 (1)
       \         /
       4 (0)   5 (0)

Horizontal Distance:

-1        0        1
 2       1,4,5      3

At HD = 0, multiple nodes overlap. Since we are looking from the bottom, the deeper/later node should be visible.

So the bottom view can be:

[2, 5, 3]
*/

/*
:- Key Observation
We need to group nodes according to their horizontal distance.
Use BFS (Level Order Traversal) so we process nodes level by level.

Store horizontalDistance -> node.val inside a Map.

If another node comes at the same horizontal distance, overwrite the previous value.
Because BFS processes upper levels before lower levels, deeper nodes naturally replace upper nodes.
Finally, sort the horizontal distances from left to right and return their values.
*/

// Node structure for Binary Tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Optimal Solution: Bottom View of Binary Tree
function bottomView(root) {
  if (root === null) return [];

  // Map stores:
  // horizontalDistance -> node value
  const map = new Map();

  // Queue stores:
  // [node, horizontalDistance]
  const queue = [[root, 0]];

  let index = 0;

  // BFS / Level Order Traversal
  while (index < queue.length) {
    const [node, hd] = queue[index++];

    // Always update the value at this HD.
    // Deeper nodes processed later will overwrite upper nodes.
    map.set(hd, node.val);

    // Left child => HD - 1
    if (node.left !== null) {
      queue.push([node.left, hd - 1]);
    }

    // Right child => HD + 1
    if (node.right !== null) {
      queue.push([node.right, hd + 1]);
    }
  }

  // Sort horizontal distances from left to right
  const sortedHD = [...map.keys()].sort((a, b) => a - b);

  // Store final bottom view
  const result = [];

  for (const hd of sortedHD) {
    result.push(map.get(hd));
  }

  return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// -----------------------------------
// Output
// -----------------------------------

console.log(bottomView(root));

// Output:
// [4, 2, 6, 3, 7]
