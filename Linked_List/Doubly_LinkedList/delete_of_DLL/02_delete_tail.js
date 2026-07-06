/*
Key Observations
If the list is empty, return null.
If the list has only one node, deleting the tail makes the list empty.
Otherwise:
    Move to the last node.
    Disconnect it from its previous node.
*/

/*
Problem:
Delete the tail (last node) of a Doubly Linked List.
Return the updated head.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  deleteTail(head) {
    // Case 1: Empty list
    if (head === null) return null;

    // Case 2: Only one node
    if (head.next === null) return null;

    // Traverse to the last node
    let current = head;

    while (current.next !== null) {
      current = current.next;
    }

    // Disconnect the tail
    current.prev.next = null;

    return head;
  }

  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " <-> ");
      current = current.next;
    }

    console.log("null");
  }
}

// Create the DLL
let head = new Node(10);
let second = new Node(20);
let third = new Node(30);

head.next = second;
second.prev = head;

second.next = third;
third.prev = second;

const dll = new DoublyLinkedList();

console.log("Before Deletion:");
dll.print(head);

head = dll.deleteTail(head);

console.log("After Deletion:");
dll.print(head);
