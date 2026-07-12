/*
You are given the heads of two singly linked lists.
These two linked lists may merge at some point, forming a Y-shaped structure.
Your task is to return the first common node where both linked lists intersect.

Important: Two nodes are considered intersecting only if they are the exact s1ame node in memory, not because they have the same value.

Example
List A

1 → 2 → 3
          \
           8 → 10 → 12
          /
      5 → 6
List B

Key Observations
Compare node references, not values.
After the intersection, both lists share the exact same nodes.
If no intersection exists, return null.
The linked lists should not be modified.
*/

// Approach 1 — Hashing
/*
Approach:
1. Store every node of the first linked list in a Set.
2. Traverse the second linked list.
3. If a node already exists inside the Set,
   that node is the intersection point.
4. Otherwise return null.

| Case    | Time     | Space |
| ------- | -------- | ----- |
| Best    | O(1)     | O(N)  |
| Average | O(N + M) | O(N)  |
| Worst   | O(N + M) | O(N)  |

*/

// ----------------------
// Node Class
// ----------------------

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ----------------------
// Function to find intersection
// ----------------------

function getIntersectionNode(headA, headB) {
  // Stores nodes of first linked list
  const visited = new Set();

  // Traverse first linked list
  let current = headA;

  while (current !== null) {
    visited.add(current); // Store node reference
    current = current.next;
  }

  // Traverse second linked list
  current = headB;

  while (current !== null) {
    // If node already exists,
    // we found the intersection.
    if (visited.has(current)) {
      return current;
    }

    current = current.next;
  }

  return null;
}

// ----------------------
// Creating Y Linked List
// ----------------------

// Shared Part
const node8 = new ListNode(8);
const node10 = new ListNode(10);
const node12 = new ListNode(12);

node8.next = node10;
node10.next = node12;

// First Linked List
const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = node8;

// Second Linked List
const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = node8;

// ----------------------
// Test
// ----------------------

const answer = getIntersectionNode(headA, headB);

console.log(answer ? answer.value : null);

// Approach 2 — Length Difference (Better)
/*
Pseudocode
Find length of List A

Find length of List B

Calculate difference

Move pointer of longer list
difference times

Now move both pointers together

If both pointers become same
      return node

return null
*/
