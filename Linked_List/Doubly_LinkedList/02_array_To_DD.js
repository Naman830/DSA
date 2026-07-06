// Class representing a node in Doubly Linked List
class Node {
  // Constructor to initialize a node
  constructor(data, next = null, prev = null) {
    // Stores data of the node
    this.data = data;

    // Pointer to the next node
    this.next = next;

    // Pointer to the previous node
    this.prev = prev;
  }
}

// Initializing an array to create nodes
let arr = [2, 5, 8, 7];

// Creating the head node of the doubly linked list
let head = new Node(arr[0]);

// Printing the object representing head
console.log(head);

// Printing the data stored in head node
console.log(head.data);
