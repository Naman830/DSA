/*
You are given a binary tree, a target node, and an integer k.
You need to return all nodes whose distance from the target is exactly k.

For example:
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4

If:
target = 5
k = 2

Then:
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4

Nodes at distance 2 from 5 are:
7, 4, 1
*/

/*
Key observation
The important problem is that a binary tree normally lets us move only:
parent → child

But from the target, we need to move in three directions:
             parent
                ↑
                |
left ←──────── target ───────→ right

So we need a way to move back to the parent.

Main idea
Store the parent of every node.
Start BFS from the target.

From every node, we can move to:
left
right
parent

BFS naturally processes nodes level by level.

Therefore, when we reach distance k, all nodes in that level are our answer.
Use a Set to prevent going back and forth between nodes.
*/

/*
Brute Force — Find distance for every node

For every node:
Find the distance between that node and target.
If the distance is k, add it to the answer.

Time: O(n²)
Space: O(h) recursion stack
*/
