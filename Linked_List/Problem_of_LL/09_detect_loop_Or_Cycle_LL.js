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

Key Observations (Short)
Linked list normally ends at null.
If we never reach null, then we're moving in a circle.
A node will eventually be visited again.
Need to detect whether we're revisiting nodes.
*/

// 1. Approach 1 — Brute Force (HashSet)
// As we traverse the linked list, store every node's reference in a Set.
// If we ever reach a node that already exists in the Set, we've found a cycle.

/*
Pseudocode
Create empty Set

while current != null

    if current already exists
        return true

    add current into Set

    current = current.next

return false
*/
