/*
BFS = Breadth First Search

BFS visits a graph level by level. It first visits the starting node, then all its direct neighbors, then their neighbors, and so on.
*/

/*
        0   ---> Level 0 = 0
       / \
      1   2 ----> Level 1 = 1, 2
     / \   \
    3   4   5 ---> Level 2 = 3, 4, 5

BFS = 0 → 1 → 2 → 3 → 4 → 5
*/

/*
How traversal work

1. Put starting node in queue [It follow FIFO rule]
2. Remove front node
3. Visit its unvisited neighbors [It mark down that this number is visited]
4. Add those neighbors to queue
5. Repeat until queue is empty
*/

function bfs(graph, start) {
  // Queue stores nodes waiting to be visited
  const queue = [start];

  // Set keeps track of visited nodes
  const visited = new Set([start]);

  // Stores the BFS traversal result
  const result = [];

  // Pointer for the front of the queue
  let front = 0;

  // Process nodes until the queue is empty
  while (front < queue.length) {
    // Get the front node
    const node = queue[front++];

    // Add node to the result
    result.push(node);

    // Check all neighbors of the current node
    for (const neighbor of graph[node]) {
      // Visit only unvisited neighbors
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Graph represented using an adjacency list
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 5],
  3: [1],
  4: [1],
  5: [2],
};

// Start BFS from node 0
console.log(bfs(graph, 0));

// Output:
// [0, 1, 2, 3, 4, 5]

/*
| Case    |     Time | Space |
| ------- | -------: | ----: |
| Best    | O(V + E) |  O(V) |
| Average | O(V + E) |  O(V) |
| Worst   | O(V + E) |  O(V) |
*/
