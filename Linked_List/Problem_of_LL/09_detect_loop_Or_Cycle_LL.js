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

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  const visited = new Set();

  let current = head;

  while (current !== null) {
    // Already visited
    if (visited.has(current)) {
      return true;
    }

    visited.add(current);
    current = current.next;
  }

  return false;
}

// OPTIMAL SSOLUTION
function hasCycleOptimal(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    // Move one step
    slow = slow.next;

    // Move two steps
    fast = fast.next.next;

    // Both meet -> cycle found
    if (slow === fast) {
      return true;
    }
  }

  // Fast reached end -> no cycle
  return false;
}

// Example (no cycle)
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);

a.next = b;
b.next = c;

console.log(hasCycleOptimal(a)); // false

// Example (cycle)
c.next = b;

console.log(hasCycleOptimal(a)); // true

/*
| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(1) | O(1)  |
| Average | O(N) | O(N)  |
| Worst   | O(N) | O(N)  |
*/

// Approach 2 — Optimal (Floyd's Cycle Detection / Tortoise and Hare)
/*
Instead of storing visited nodes, use two pointers:

Slow moves 1 step at a time.
Fast moves 2 steps at a time.

If there is no cycle, fast reaches null.

If there is a cycle, the fast pointer eventually catches the slow pointer inside the loop.
*/

/*
Pseudocode
slow = head
fast = head

while fast != null AND fast.next != null

    slow = slow.next
    fast = fast.next.next

    if slow == fast
        return true

return false

| Case    | Time                                       | Space |
| ------- | ------------------------------------------ | ----- |
| Best    | O(1) *(very small cycle detected quickly)* | O(1)  |
| Average | O(N)                                       | O(1)  |
| Worst   | O(N)                                       | O(1)  |

*/
