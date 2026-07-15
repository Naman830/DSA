/*
You are given the head of a linked list and an integer k
Your task is to rotate the linked list to the right by k positions.

When we rotate once to the right:
The last node becomes the first node and Everything else shifts one position to the right.

Input:
1 → 2 → 3 → 4 → 5
k = 2

Rotate once:
5 → 1 → 2 → 3 → 4

Rotate twice:
4 → 5 → 1 → 2 → 3

Output:
4 → 5 → 1 → 2 → 3
*/

// 1. Brute Force Approach
/*
Rotate the list one step at a time.

For every rotation:

Find the last node.
Find the second last node.
Disconnect the last node.
Put it before the head.

Repeat this k times.

Pseudocode
Repeat k times

    Find last node
    Find second last node

    secondLast.next = null

    last.next = head

    head = last
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 0;
  let temp = head;

  while (temp) {
    length++;
    temp = temp.next;
  }

  k = k % length;

  while (k--) {
    let previous = null;
    let current = head;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    current.next = head;
    head = current;
  }
  return head;
}

// ---------- Helper Functions ----------
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let ans = rotateRight(head, 2);

printList(ans);

// Output:
// 4 -> 5 -> 1 -> 2 -> 3
