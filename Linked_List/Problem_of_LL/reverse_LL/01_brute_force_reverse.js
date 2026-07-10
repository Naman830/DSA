/*

A linked list can only move forward, not backward. So the brute force idea is:

Traverse the linked list.
Store every node's value in an array.
Traverse the linked list again.
Replace each node's value using the array from the end.

Important: We are not reversing the links. We are only reversing the values stored inside the nodes.
*/

/*
Algorithm

Create an empty array

Traverse linked list
    push every node value into array

Start again from head

Take index = array.length - 1

While current node exists
    current.val = array[index]
    index--
    current = current.next

Return head
*/

// ===============================
// Node Class
// ===============================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ===============================
// Linked List Class
// ===============================
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at End
  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Print Linked List
  print() {
    let current = this.head;

    while (current !== null) {
      process.stdout.write(current.data + " -> ");
      current = current.next;
    }

    console.log("null");
  }

  // ===============================
  // Reverse Linked List (Brute Force)
  // ===============================
  reverseBruteForce() {
    // Empty List
    if (this.head === null) {
      return;
    }

    // Step 1 : Store all node values
    let arr = [];

    let current = this.head;

    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }

    console.log("Stored Array :", arr);

    // Step 2 : Traverse again and replace values
    current = this.head;

    let i = arr.length - 1;

    while (current !== null) {
      current.data = arr[i];
      i--;
      current = current.next;
    }
  }
}

// ===============================
// Driver Code
// ===============================

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

console.log("Original Linked List:");
list.print();

console.log("\nReversing...\n");

list.reverseBruteForce();

console.log("Reversed Linked List:");
list.print();

// TC: O(2N) & SC: O(N)
