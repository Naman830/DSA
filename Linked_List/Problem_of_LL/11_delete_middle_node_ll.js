/*
You are given the head of a singly linked list.
Your task is to delete the middle node and return the updated linked list.
If the linked list has only one node, deleting the middle node means the list becomes empty (null).

Key Observations (Short)
If there is only one node, return null.
We need the node before the middle because in a singly linked list we cannot move backward.
Once we get the previous node:
prev.next = middle.next
The middle node gets skipped (deleted).
*/

// 1. Brute Force Approach
/*
First, count the total number of nodes.
Then calculate the middle position.
Traverse again until the node before the middle and remove the middle node.
This requires two traversals.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deleteMiddle(head) {
  // If only one node exists
  if (head === null || head.next === null) {
    return null;
  }

  // Count total nodes
  let count = 0;
  let temp = head;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  // Middle index (0-based)
  let middle = Math.floor(count / 2);

  temp = head;

  // Reach node before middle
  for (let i = 0; i < middle - 1; i++) {
    temp = temp.next;
  }

  // Delete middle node
  temp.next = temp.next.next;

  return head;
}
// Helper function
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Test Case
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head = deleteMiddle(head);
printList(head); // 1 -> 2 -> 4 -> 5
