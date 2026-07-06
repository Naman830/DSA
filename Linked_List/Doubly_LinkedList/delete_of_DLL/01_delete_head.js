/*
Before deletion
NULL <- [10] <-> [20] <-> [30] -> NULL
        ^
       head

After deleting head
NULL <- [20] <-> [30] -> NULL
        ^
       head

The node 10 is removed.

Key Observations
If the list is empty → return null.
If only one node exists → deleting it makes the list empty.
Otherwise:
Move head to second node.
Make new head's prev = null.
*/
// Problem:
// Delete the head node of a Doubly Linked List
// Return the new head after deletion.

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  deleteHead(head) {
    // Empty list
    if (head === null) {
      return null;
    }

    // Only one node
    if (head.next === null) {
      return null;
    }

    // Store current head
    let temp = head;

    // Move head to next node
    head = head.next;

    // Remove backward link
    head.prev = null;

    // Disconnect deleted node (optional)
    temp.next = null;

    return head;
  }

  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " ");
      current = current.next;
    }

    console.log();
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.prev = head;

head.next.next = new Node(30);
head.next.next.prev = head.next;

const dll = new DoublyLinkedList();

console.log("Before Deletion:");
dll.print(head);

head = dll.deleteHead(head);

console.log("After Deletion:");
dll.print(head);
