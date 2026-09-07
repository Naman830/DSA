/*
Binary Tree Traversal (BFS - Breadth First Search)

Easy Definition:
BFS (Breadth First Search) visits a binary tree level by level, starting from the root. It first visits every node of Level 1, then Level 2, then Level 3, and so on.
*/

/*
          1      --- level-1
        /   \    
       2     3   --- level-2
      / \   / \
     4   5 6   7 --- level-3

1 → 2 → 3 → 4 → 5 → 6 → 7
*/

/*
            ROOT
             ↓
          put in Queue
             ↓
       ┌─────────────┐
       │   QUEUE     │
       └─────────────┘
             ↓
        remove front
             ↓
          visit node
             ↓
      ┌──────┴──────┐
      ↓             ↓
    LEFT          RIGHT
      ↓             ↓
   add queue     add queue
      └──────┬──────┘
             ↓
       repeat until
       queue is empty
*/

/*
| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(N) | O(N)  |
| Average | O(N) | O(N)  |
| Worst   | O(N) | O(N)  |
*/

// ============================================================================================
// LEVEL ORDER TRAVERSAL
// ============================================================================================

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  // If tree is empty
  if (root === null) {
    return [];
  }

  const result = [];

  // Queue starts with root
  const queue = [root];

  let front = 0;

  while (front < queue.length) {
    // Take the first node from the queue
    const current = queue[front++];

    // Visit the current node
    result.push(current.value);

    // Add left child to queue
    if (current.left !== null) {
      queue.push(current.left);
    }

    // Add right child to queue
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return result;
}

// ============================================================================================
// TEST CASE
// ============================================================================================

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));
// [1, 2, 3, 4, 5, 6, 7]
