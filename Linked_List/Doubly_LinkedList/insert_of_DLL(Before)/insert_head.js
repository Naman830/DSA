/*
Before:
NULL <- 20 <-> 30 <-> 40 -> NULL

Insert 10

After: 
NULL <- 10 <-> 20 <-> 30 <-> 40 -> NULL

Key Observations
The new node becomes the first node.
The new node's next should point to the old head.
The old head's prev should point back to the new node.
The new node's prev will always be null.
If the list is empty, simply return the new node.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  // Insert a node at the head
  insertHead(head, value) {
    const newNode = new Node(value);

    // If the list is empty
    if (head === null) {
      return newNode;
    }

    // Connect the new node with the old head
    newNode.next = head;
    head.prev = newNode;

    // New node becomes the new head
    return newNode;
  }

  // Print the list
  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " <-> ");
      current = current.next;
    }

    console.log("NULL");
  }
}

// Create the list
let head = new Node(20);
let second = new Node(30);
let third = new Node(40);

head.next = second;
second.prev = head;

second.next = third;
third.prev = second;

const dll = new DoublyLinkedList();

console.log("Before Insertion:");
dll.print(head);

head = dll.insertHead(head, 10);

console.log("After Insertion:");
dll.print(head);

/*
| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(1) | O(1)  |
| Average | O(1) | O(1)  |
| Worst   | O(1) | O(1)  |

*/
