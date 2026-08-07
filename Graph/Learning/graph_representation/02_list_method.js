/*
Adjacency List (Most Important)

Instead of storing all possible edges, store only the neighbors of each vertex.
Each node keeps a list of connected nodes

0 ----- 1
|       |
|       |
2 ----- 3

Adjacent list
  0 → [1,2]
  1 → [0,3]
  2 → [0,3]
  3 → [1,2]
*/

const V = 4;

// Create adjacency list
const graph = Array.from({ length: V }, () => []);

// Add edges
graph[0].push(1);
graph[1].push(0);

graph[0].push(2);
graph[2].push(0);

graph[1].push(3);
graph[3].push(1);

graph[2].push(3);
graph[3].push(2);

console.log(graph);

/*
Directed Graph Representation
0 → 1
↓
2 → 3

Adjacency List
0 → [1,2]
1 → []
2 → [3]
3 → []
*/

const VD = 4;

const graphD = Array.from({ length: VD }, () => []);

// Only one direction
graphD[0].push(1);
graphD[0].push(2);
graphD[2].push(3);

console.log(graphD);
