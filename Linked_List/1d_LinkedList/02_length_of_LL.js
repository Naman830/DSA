// ---------------------------------------------
// NODE CLASS
// ---------------------------------------------
class Node {
  constructor(value) {
    // Store the value of the node.
    this.value = value;

    // Initially, the node doesn't point anywhere.
    this.next = null;
  }
}

// ---------------------------------------------
// LINKED LIST CLASS
// ---------------------------------------------
class LinkedList {
  constructor() {
    // Initially, the linked list is empty.
    this.head = null;
  }

  // -------------------------------------------
  // FIND LENGTH OF LINKED LIST
  // -------------------------------------------
  // Count how many nodes are present in the list.
  length() {
    // Start from the first node.
    let current = this.head;

    // Initially, no nodes have been counted.
    let count = 0;

    // Visit every node until we reach null.
    while (current !== null) {
      // Count the current node.
      count++;

      // Move to the next node.
      current = current.next;
    }

    // Return the total number of nodes.
    return count;
  }
}

// ---------------------------------------------
// QUICK TEST
// ---------------------------------------------
const list = new LinkedList();

// Create nodes.
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(5);

// Connect the nodes.
// 1 → 2 → 3 → 5 → null
first.next = second;
second.next = third;
third.next = fourth;

// Set the head of the linked list.
list.head = first;

// Print the length.
console.log(list.length()); // Output: 4
