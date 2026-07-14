// Approach 3 — Optimal (Merge Sort)
/*
Merge Sort has two properties:
Divide
Merge

For Linked Lists,
Finding the middle is easy using Slow & Fast Pointer.
Merging two sorted lists is also easy.
So Merge Sort becomes perfect.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Merge two sorted linked lists
function merge(left, right) {
  const dummy = new ListNode(-1);
  let tail = dummy;

  while (left && right) {
    if (left.val <= right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }

    tail = tail.next;
  }

  // Attach remaining nodes
  tail.next = left ? left : right;

  return dummy.next;
}

// Merge Sort
function sortList(head) {
  // Base Case
  if (!head || !head.next) return head;

  // Find middle
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the list into two halves
  const rightHead = slow.next;
  slow.next = null;

  // Recursively sort both halves
  const left = sortList(head);
  const right = sortList(rightHead);

  // Merge sorted halves
  return merge(left, right);
}

// ----------------------
// Helper Functions
// ----------------------

function createList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

function printList(head) {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(" -> "));
}

// Test Cases
let head1 = createList([4, 2, 1, 3]);
printList(sortList(head1)); // 1 -> 2 -> 3 -> 4

let head2 = createList([-1, 5, 3, 4, 0]);
printList(sortList(head2)); // -1 -> 0 -> 3 -> 4 -> 5
