// ---------------------------------------------
// NODE CLASS
// ---------------------------------------------
class Node {
  constructor(value) {
    // Store the data of the node.
    this.value = value;

    // Initially, the node doesn't point to any node.
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
  // TRAVERSAL (PRINT ALL NODES)
  // -------------------------------------------
  // Traversal means visiting every node
  // from the head until we reach null.
  print() {
    // Start from the first node.
    let current = this.head;

    // Store all node values.
    let result = [];

    // Visit every node until current becomes null.
    while (current !== null) {
      // Save the current node's value.
      result.push(current.value);

      // Move to the next node.
      current = current.next;
    }

    // Print the linked list.
    console.log(result.join(" -> ") + " -> null");
  }
}

// ---------------------------------------------
// QUICK TEST / DEMO
// ---------------------------------------------
const list = new LinkedList();

// Create nodes manually.
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(5);

// Connect the nodes.
// 1 → 2 → 3 → 5 → null
first.next = second;
second.next = third;
third.next = fourth;

// Make the first node the head of the list.
list.head = first;

// Traverse and print the linked list.
list.print();

/*
head
 │
 ▼
┌─────┬──────┐
│  1  │   ●──┼─────────►
└─────┴──────┘
                ┌─────┬──────┐
                │  2  │   ●──┼─────────►
                └─────┴──────┘
                                ┌─────┬──────┐
                                │  3  │   ●──┼─────────►
                                └─────┴──────┘
                                                ┌─────┬──────┐
                                                │  5  │ null │
                                                └─────┴──────┘
*/
