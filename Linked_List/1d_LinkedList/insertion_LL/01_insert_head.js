/*
Before:
Head
 ↓
10 → 20 → 30 → null

Insert 5

After:
Head
 ↓
5 → 10 → 20 → 30 → null

2. Key Observation
To insert at the beginning:

Create a new node.
Make the new node point to the current head.
Update the head to this new node.

Only 2 pointer changes are needed.
*/

// Problem:
// Insert a new node at the beginning (head) of a linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning
  insertHead(value) {
    // Step 1: Create a new node
    const newNode = new Node(value);

    // Step 2: Point new node to current head
    newNode.next = this.head;

    // Step 3: Update head
    this.head = newNode;
  }

  // Print linked list
  print() {
    let current = this.head;

    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }

    console.log("null");
  }
}

// Test Cases
const list = new LinkedList();

list.insertHead(30);
list.insertHead(20);
list.insertHead(10);

list.print();
