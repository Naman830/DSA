/*
Imagine every node is a person holding the hand of the next person.

Before:
10 holds 20
20 holds 30
30 holds 40
40 holds 50

We want everyone to hold the previous person's hand instead.
After:

50 holds 40
40 holds 30
30 holds 20
20 holds 10

The problem is...
When you change
20.next = 10

you lose the connection to 30.
So before changing any pointer, we must save the next node.
That's why we use three pointers.
*/

// ===============================
// Node Class
// Represents a single node in the linked list
// ===============================
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

// ===============================
// Linked List Class
// ===============================
class LinkedList {
  constructor() {
    // Initially the linked list is empty
    this.head = null;
  }

  // ===============================
  // Insert a new node at the end
  // Time Complexity: O(n)
  // ===============================
  insert(data) {
    // Create a new node
    const newNode = new Node(data);

    // If the list is empty,
    // make the new node the head
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Start from the head
    let temp = this.head;

    // Traverse until the last node
    while (temp.next !== null) {
      temp = temp.next;
    }

    // Connect the last node to the new node
    temp.next = newNode;
  }

  // ===============================
  // Print the linked list
  // Time Complexity: O(n)
  // ===============================
  print() {
    let temp = this.head;

    while (temp !== null) {
      process.stdout.write(temp.data + " -> ");
      temp = temp.next;
    }

    console.log("null");
  }

  // ===============================
  // Reverse the Linked List (Optimal)
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // ===============================
  reverse() {
    let prev = null;
    let curr = head;

    while (curr !== null) {
      // Save the next node
      const next = curr.next;

      // Reverse the current node's pointer
      curr.next = prev;

      // Move pointers one step forward
      prev = curr;
      curr = next;
    }

    // 'prev' is the new head of the reversed list
    return prev;
  }
}

// ===============================
// Driver Code
// ===============================

// Create a new linked list
const list = new LinkedList();

// Insert elements
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

// Print original list
console.log("Original Linked List:");
list.print();

// Reverse the linked list
list.reverse();

// Print reversed list
console.log("\nReversed Linked List:");
list.print();
