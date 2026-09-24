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

  // true  = store current level from LEFT → RIGHT
  // false = store current level from RIGHT → LEFT
  let leftToRight = true;

  while (front < queue.length) {
    /*
      Number of nodes in the CURRENT level.

      queue.length = total nodes currently inside queue
      front        = nodes we have already processed

      So:

      levelSize = queue.length - front

      IMPORTANT:
      We calculate this BEFORE processing the level because
      new children will be added to the queue while looping.
    */
    const levelSize = queue.length - front;

    // Create an array to store only the current level
    const level = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      // Get the next node and move front forward
      const node = queue[front++];

      /*
        Decide WHERE to store the value.

        LEFT → RIGHT:
        Store normally.

        RIGHT → LEFT:
        Store in reverse positions.

        Reverse index formula:
        levelSize - 1 - i
      */
      const index = leftToRight ? i : levelSize - 1 - i;

      // Put the current node's value at the correct position
      level[index] = node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    // Current level is complete, so add it to final result
    result.push(level);

    /*
      Flip direction for the next level.

      true  → false
      false → true

      LEFT → RIGHT
      RIGHT → LEFT
      LEFT → RIGHT
      ...
    */
    leftToRight = !leftToRight;
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

console.log(zigZagTraversal(root));
