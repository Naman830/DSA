/*
In normal level-order traversal, we visit each level from left → right:

        1
       / \
      2   3
     / \ / \
    4  5 6  7

Normal:
[1]
[2, 3]
[4, 5, 6, 7]

In Zig-Zag traversal, the direction changes at every level:
Level 1 → left to right
Level 2 → right to left
Level 3 → left to right
Level 4 → right to left

So the answer becomes:
[
  [1],
  [3, 2],
  [4, 5, 6, 7]
]
*/

/*
:- Key Observation

We still process the tree level by level, so BFS is useful.
Use a queue to process each level.
Keep a boolean such as leftToRight.

For every level:

If leftToRight = true, put values normally.
Otherwise, reverse the level.

After processing a level, toggle the direction.

left → right
      ↓
right → left
      ↓
left → right
      ↓
...
*/

/*
OPTIMAL SOLUTION 

| Complexity | Cost     |
| ---------- | -------- |
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

function zigZagTraversal(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  let front = 0;
  let leftToRight = true;

  while (front < queue.length) {
    const levelSize = queue.length - front;

    // Create array for current level
    const level = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];

      // Decide where to put the node
      const index = leftToRight ? i : levelSize - 1 - i;

      level[index] = node.val;

      // Add children for next level
      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(level);

    // Change direction
    leftToRight = !leftToRight;
  }

  return result;
}

// Create tree
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(zigZagTraversal(root));
