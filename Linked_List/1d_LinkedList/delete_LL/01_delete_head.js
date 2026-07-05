/*
Before:
Head
 ↓
10 → 20 → 30 → 40 → null

After deleting head:
Head
 ↓
20 → 30 → 40 → null
*/

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  // Delete the head node
  deleteHead(head) {
    // If the list is empty
    if (head === null || head.next === null) {
      return null;
    }

    // Move head to the second node
    head = head.next;

    // Return the new head
    return head;
  }

  // Print the linked list
  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }

    console.log("null");
  }
}

// ----------------------------
// Creating the linked list
// 10 -> 20 -> 30 -> 40
// ----------------------------

const list = new LinkedList();

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log("Before deleting head:");
list.print(head);

// Delete head
head = list.deleteHead(head);

console.log("After deleting head:");
list.print(head);

/*
TC: O(1)
SC: O(1)
*/
