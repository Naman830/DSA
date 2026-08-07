/*
===========================================================
GRAPH - INTRODUCTION
===========================================================

A Graph is a non-linear data structure that represents
connections (relationships) between different objects.

The objects are called Vertices (Nodes).
The connections between them are called Edges.

Example:

Alice -------- Bob
  |              |
  |              |
Charlie ------ David

Vertices (Nodes):
Alice, Bob, Charlie, David

Edges:
Friendship (connections) between them.
*/

/*
===========================================================
UNDIRECTED GRAPH
===========================================================

In an Undirected Graph, edges work in both directions.

      A
     / \
    B---C
     \
      D

Vertices (Nodes):
A, B, C, D

Degree = Number of edges connected to a vertex.

Degree(A) = 2
Degree(B) = 3
Degree(C) = 2
Degree(D) = 1

Property:
Total Degree = 2 × Number of Edges

Reason:
Each edge is connected to two vertices,
so every edge is counted twice.
*/

/*
===========================================================
CYCLE IN UNDIRECTED GRAPH
===========================================================

A cycle means you start from a node and can return
to the same node without repeating an edge.

Example:

A ------- B
|         |
|         |
C ------- D

One possible cycle:
A → B → D → C → A

Note:
An undirected graph is NOT always cyclic.

Example of an Acyclic Undirected Graph (Tree):

    A
   / \
  B   C
      |
      D

This graph has no cycle.
*/

/*
===========================================================
DIRECTED GRAPH (DIGRAPH)
===========================================================

In a Directed Graph, every edge has a direction.

          A
        ↙   ↘
      ↓      ↘
     B -----> C
     ↑
     |
     D

For Directed Graphs, there are two types of degree.

In-degree  = Number of incoming edges.
Out-degree = Number of outgoing edges.

Example:

A → B
C → B
B → D

For vertex B:

In-degree(B) = 2
Out-degree(B) = 1
*/

/*
===========================================================
DIRECTED ACYCLIC GRAPH (DAG)
===========================================================

A DAG (Directed Acyclic Graph) is a Directed Graph
that contains NO cycles.

Example:

A → B → C
 \      ↓
  → D → E

There is no path that starts from a node
and comes back to the same node.

Common Uses:
- Task Scheduling
- Course Prerequisites
- Build Systems
- Dependency Graphs
*/

/*
===========================================================
WEIGHTED GRAPH
===========================================================

Each edge has a cost (weight).

A ----5---- B
 \          /
  2        3
   \      /
      C

The weight can represent:

- Distance
- Time
- Cost

Example:
Google Maps
*/

/*
===========================================================
UNWEIGHTED GRAPH
===========================================================

Every edge has the same weight.

By default, we usually assume
every edge has a weight of 1.

A ---- B
|
|
C

No weights are written on the edges.
*/
