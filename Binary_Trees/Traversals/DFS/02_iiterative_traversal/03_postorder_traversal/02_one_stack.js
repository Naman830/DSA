/*
🧠 Key Observation
Think of the stack as remembering nodes that we cannot visit yet.

For every node:

i. Keep going left and push nodes into the stack.
ii. When there is no left child, look at the right child.
iii. If the right child exists and is not processed yet, go to the right subtree.
iv. Otherwise, pop and visit the node.

The important trick is:
lastVisited tells us whether the right subtree of the current node is already processed.

        1
       / \
      2   3
     / \
    4   5

Postorder: 4 → 5 → 2 → 3 → 1

🔑 Easy Pattern to Remember
Go Left → Push
       ↓
Check Right
       ↓
Right not processed → Go Right
Right processed      → Pop + Visit
*/
