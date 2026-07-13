/*
Imagine a linked list like this:
1 → 2 → 3 → 4 → 5 → null

Normally, the last node points to null.
But sometimes because of a mistake (or intentionally in a problem), the last node points back to an earlier node.

Example:
1 → 2 → 3 → 4 → 5
          ↑      ↓
          ← ← ← ←

Here,
5.next = 3

So after reaching 5, instead of ending, we go back to 3.
This is called a Cycle or Loop.

Our task:
Return true if a cycle exists, otherwise false.
*/
