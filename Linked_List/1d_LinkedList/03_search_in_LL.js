// -------------------------
// Node Class
// Represents a single node of the linked list
// -------------------------
class Node {
  constructor(value) {
    // Store the data of the node
    this.value = value;

    // Initially, the node does not point to any other node
    this.next = null;
  }
}

// -------------------------
// Linked List Class
// Contains operations that can be performed on a linked list
// -------------------------
class LinkedList {
  searchValue(head, target) {
    // Start traversing from the head node
    let current = head;

    // Continue until we reach the end of the list
    while (current !== null) {
      // If the current node contains the target value,
      // return true immediately.
      if (current.value === target) {
        return true;
      }

      // Move to the next node
      current = current.next;
    }

    // Target value was not found
    return false;
  }
}

// Create a LinkedList object
const list = new LinkedList();

// Create the linked list:
// 10 → 20 → 30 → null
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

// Search for the value 20
if (list.searchValue(head, 20)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
