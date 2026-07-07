/*
You are given a pointer/reference to a node in a Doubly Linked List. Insert a new node before that node.

Since the given node is not the head, the head remains unchanged.

2. Key Observations
Every node has prev and next.
We already have the node before which we need to insert.
Update 4 pointers carefully.
Head does not change because we're not inserting before the first node.
*/

// Problem:
// Insert a new node before a given node in a Doubly Linked List.
// Assumption: Given node is NOT the head.

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function insertBeforeNode(curr, value) {
  const newNode = new Node(value);

  // Connect new node
  newNode.prev = curr.prev;
  newNode.next = curr;

  // Connect previous node to new node
  curr.prev.next = newNode;

  // Connect current node back to new node
  curr.prev = newNode;
}

// Print DLL
function print(head) {
  let temp = head;

  while (temp) {
    process.stdout.write(temp.value + " <-> ");
    temp = temp.next;
  }

  console.log("null");
}

// Example
let head = new Node(10);
let second = new Node(20);
let third = new Node(30);

head.next = second;
second.prev = head;

second.next = third;
third.prev = second;

console.log("Before:");
print(head);

// Insert 15 before 20
insertBeforeNode(second, 15);

console.log("After:");
print(head);

//  TC: O(1)
// SC: O(1)
