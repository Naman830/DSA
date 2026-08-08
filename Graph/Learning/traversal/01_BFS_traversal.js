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
