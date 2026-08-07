/*
A Connected Component is a group of vertices (nodes) in an undirected graph where:

Every node can reach every other node in the group.
There is no connection to nodes in another group.

Think of it as separate islands inside one graph.

Example:-

      0
     / \
    1---2

      3
      |
      4

      5

Components are:
{0,1,2}
{3,4}
{5}

Answer = 3 Connected Components
*/

/*
.Key Observations
Works for Undirected Graphs.
Every node belongs to exactly one connected component.
If the graph has only one connected component, the graph is Connected.
If it has more than one, it is Disconnected.
*/
