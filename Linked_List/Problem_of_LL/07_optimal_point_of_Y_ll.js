// Optimal Solution (Two Pointer Switching)
/*
Instead of calculating the lengths of both linked lists, we can make both pointers travel the same total distance.

The trick is simple:

Pointer A starts from headA.
Pointer B starts from headB.
Whenever a pointer reaches the end (null), instead of stopping, it jumps to the head of the other linked list.

Eventually:

If the lists intersect, both pointers will meet at the intersection.
If they don't intersect, both pointers will become null at the same time.
*/

/*
When Pointer A finishes List A,
instead of stopping,
it starts from List B.
Similarly,

when Pointer B finishes List B,
it starts from List A.
Now look at the total distance.

Pointer A travels

List A + List B
Pointer B also travels
List B + List A
Both travel exactly the same distance.

Therefore, they become synchronized.
*/

/*
Problem:
Find the intersection point of two Y-shaped linked lists.

Optimal Approach (Two Pointer Switching)

Idea:
- Start one pointer from each list.
- Move both pointers one step at a time.
- If a pointer reaches the end of its list,
  redirect it to the head of the other list.
- Since both pointers travel the same total distance,
  they will either:
    1. Meet at the intersection node.
    2. Become null together if no intersection exists.
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
// Find Intersection
// ----------------------

function getIntersectionNode(headA, headB) {
  // Pointer for first list
  let pointerA = headA;

  // Pointer for second list
  let pointerB = headB;

  // Continue until both pointers point
  // to the same node (or both become null)
  while (pointerA !== pointerB) {
    // If pointerA reaches the end,
    // start from List B
    if (pointerA === null) {
      pointerA = headB;
    } else {
      pointerA = pointerA.next;
    }

    // If pointerB reaches the end,
    // start from List A
    if (pointerB === null) {
      pointerB = headA;
    } else {
      pointerB = pointerB.next;
    }
  }

  // Either the intersection node
  // or null if no intersection exists
  return pointerA;
}

// ----------------------
// Create Shared Part
// ----------------------

const node8 = new ListNode(8);
const node10 = new ListNode(10);
const node12 = new ListNode(12);

node8.next = node10;
node10.next = node12;

// ----------------------
// First List
// ----------------------

const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = node8;

// ----------------------
// Second List
// ----------------------

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = node8;

// ----------------------
// Test
// ----------------------

const intersection = getIntersectionNode(headA, headB);

console.log(intersection ? intersection.value : null);
