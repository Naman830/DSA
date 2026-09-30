// Optimal Solution — Parent Map + BFS

/*
Why BFS?
Imagine the target is level 0:

distance 0 → target
distance 1 → neighbors of target
distance 2 → neighbors of those nodes
distance 3 → ...

That's exactly what BFS does.

| Part             |     Time |    Space |
| ---------------- | -------: | -------: |
| Build parent map |   `O(n)` |   `O(n)` |
| BFS              |   `O(n)` |   `O(n)` |
| **Total**        | **O(n)** | **O(n)** |
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function distanceK(root, target, k) {
  // ------------------------------------------------
  // STEP 1: Build parent map
  // ------------------------------------------------

  const parentMap = new Map();

  function buildParent(node, parent) {
    if (node === null) return;

    parentMap.set(node, parent);

    buildParent(node.left, node);
    buildParent(node.right, node);
  }

  buildParent(root, null);

  // ------------------------------------------------
  // STEP 2: BFS starting from target
  // ------------------------------------------------

  const queue = [target];

  // Prevent visiting the same node again
  const visited = new Set();

  visited.add(target);

  let distance = 0;

  while (queue.length > 0) {
    // Number of nodes at current distance
    const size = queue.length;

    // ------------------------------------------------
    // If current level is distance K,
    // all nodes in queue are our answer.
    // ------------------------------------------------

    if (distance === k) {
      return queue.map((node) => node.val);
    }

    // Process current level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // ---------------------------------------------
      // Move to left child
      // ---------------------------------------------

      if (node.left !== null && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
      }

      // ---------------------------------------------
      // Move to right child
      // ---------------------------------------------

      if (node.right !== null && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
      }

      // ---------------------------------------------
      // Move to parent
      // ---------------------------------------------

      const parent = parentMap.get(node);

      if (parent !== null && !visited.has(parent)) {
        visited.add(parent);
        queue.push(parent);
      }
    }

    // Move to next distance
    distance++;
  }

  return [];
}

// ------------------------------------------------
// Example
// ------------------------------------------------

const root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const target = root.left;

// k = 2
console.log(distanceK(root, target, 2));

// Output:
// [7, 4, 1]
