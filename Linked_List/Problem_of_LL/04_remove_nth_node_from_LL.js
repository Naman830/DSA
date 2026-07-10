/*
Imagine a linked list:
1 → 2 → 3 → 4 → 5

If n = 2

We have to remove the 2nd node from the end.
Count from the end:
5  ← 1st
4  ← 2nd   ❌ Remove this
3  ← 3rd
2  ← 4th
1  ← 5th

Answer becomes
1 → 2 → 3 → 5

The challenge is:
We only know how to move forward in a singly linked list.
We cannot move backwards.
So how do we find the node from the end?
*/

// 1. Approach 1 (Brute Force)

// ------------------------------
// Definition of Linked List Node
// ------------------------------
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ----------------------------------------------------
// Remove Nth Node From End (Brute Force)
// Time  : O(2N)
// Space : O(1)
// ----------------------------------------------------
function removeNthFromEnd(head, n) {
  // If list is empty
  if (head === null) {
    return null;
  }

  // --------------------------
  // Step 1 : Find Length
  // --------------------------
  let length = 0;
  let temp = head;

  while (temp !== null) {
    length++;
    temp = temp.next;
  }

  console.log("Length of Linked List =", length);

  // --------------------------
  // Step 2 : Find Position
  // from beginning
  // --------------------------
  let deletePosition = length - n + 1;

  console.log("Delete Position =", deletePosition);

  // --------------------------
  // Step 3 : Delete Head
  // --------------------------
  if (deletePosition === 1) {
    console.log("Deleting Head Node =", head.data);
    return head.next;
  }

  // --------------------------
  // Step 4 : Reach Previous Node
  // --------------------------
  let current = head;

  for (let i = 1; i < deletePosition - 1; i++) {
    console.log("Moving to Node =", current.data);
    current = current.next;
  }

  console.log("Previous Node =", current.data);
  console.log("Deleting Node =", current.next.data);

  // --------------------------
  // Step 5 : Delete Node
  // --------------------------
  current.next = current.next.next;

  return head;
}

// ------------------------------
// Print Linked List
// ------------------------------
function printList(head) {
  let temp = head;

  while (temp !== null) {
    process.stdout.write(temp.data + " -> ");
    temp = temp.next;
  }

  console.log("NULL");
}

// ------------------------------
// Create Linked List
// ------------------------------
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List");
printList(head);

head = removeNthFromEnd(head, 2);

console.log("\nFinal List");
printList(head);

// 1. Approach 2 (Optimal)
// We use === Fast Pointer, Slow Pointer

/*
Keep a gap of n nodes between them.
When Fast reaches the end,
Slow automatically reaches the node before the one to delete.
 */
