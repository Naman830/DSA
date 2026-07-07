/*
Every node has:
next
prev

While deleting a node:
Previous node should point to the next node.
Next node should point to the previous node.

Special cases:
NO Deleting the head
NO Deleting the tail
Deleting the only node
*/

/*
Problem:
Delete a given node from a Doubly Linked List.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function deleteNode(node) {
  // Empty node
  if (node === null) return;

  let previous = node.prev;
  let front = node.next;

  // Connect previous node to next node
  if (previous !== null) {
    previous.next = front;
  }

  // Connect next node to previous node
  if (front !== null) {
    front.prev = previous;
  }

  // Disconnect current node
  node.next = null;
  node.prev = null;
}

// Example
let head = new Node(10);
let second = new Node(20);
let third = new Node(30);
let fourth = new Node(40);

head.next = second;
second.prev = head;

second.next = third;
third.prev = second;

third.next = fourth;
fourth.prev = third;

// Delete node 30
deleteNode(third);

// Print list
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
