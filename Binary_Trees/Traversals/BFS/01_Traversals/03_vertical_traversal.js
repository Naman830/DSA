/*
1. Question

In Vertical Order Traversal of a Binary Tree, we group nodes according to their horizontal position (column).

Root → column 0
Left child → column -1
Right child → column +1

Then return the columns from left to right.

                         1
                       (0,0)
                      /     \
                     /       \
                 2             3
              (1,-1)         (1,1)
               /  \           /  \
              /    \         /    \
             4      6       5      7
          (2,-2)  (2,0)   (2,0)  (2,2)

Now imagine vertical lines passing through the tree:
 col = -2      col = -1       col = 0       col = 1       col = 2
    |              |              |             |             |
    |              |              1             |             |
    |              2              |             3             |
    4              |            6   5           |             7
    |              |              |             |             |
*/

/*
:-Key Observation
We need to track both row and column of every node.
Root starts at (row = 0, col = 0).
Left child becomes (row + 1, col - 1).
Right child becomes (row + 1, col + 1).
Store nodes based on their column.
For the same column, sort by row first, then by node value when rows are also equal.
BFS makes it easy to visit every node while tracking coordinates.
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function verticalTraversal(root) {
  if (root === null) return [];

  // column -> [[row, value], ...]
  const columnMap = new Map();

  // Queue stores: [node, row, column]
  const queue = [[root, 0, 0]];

  let minCol = 0;
  let maxCol = 0;

  // Use pointer instead of shift() to keep queue operations O(1)
  let front = 0;

  while (front < queue.length) {
    const [node, row, col] = queue[front++];

    // Create column if it doesn't exist
    if (!columnMap.has(col)) {
      columnMap.set(col, []);
    }

    // Store row and node value
    columnMap.get(col).push([row, node.val]);

    // Track leftmost and rightmost columns
    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);

    // Left child
    if (node.left !== null) {
      queue.push([node.left, row + 1, col - 1]);
    }

    // Right child
    if (node.right !== null) {
      queue.push([node.right, row + 1, col + 1]);
    }
  }

  const result = [];

  // Process columns from left -> right
  for (let col = minCol; col <= maxCol; col++) {
    const nodes = columnMap.get(col);

    if (!nodes) continue;

    // Same column:
    // 1. smaller row first
    // 2. if same row, smaller value first
    nodes.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }

      return a[1] - b[1];
    });

    // Keep only node values
    result.push(nodes.map(([row, value]) => value));
  }

  return result;
}

// Example Tree:
//
//          3
//         / \
//        9   20
//           /  \
//          15   7
//

const root = new TreeNode(3);

root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalTraversal(root));

// Output:
// [[9], [3, 15], [20], [7]]
