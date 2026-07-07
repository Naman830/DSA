/*
Before:
10 ⇄ 20 ⇄ 30 ⇄ 40

Insert 25 before the tail (40).

After:
10 ⇄ 20 ⇄ 30 ⇄ 25 ⇄ 40

Key Observations
Tail is the last node (next == null).
We need the node before the tail.
Since it's a DLL, updating both next and prev pointers is important.

Edge cases:
Empty list
Only one node
Two or more nodes
*/

/*
OPTIMAL APPROACH IDEA

Idea
Reach the tail.
Let: tail = last node

prevNode = node before tail
Create a new node.
Connect all four pointers properly.
*/

/*
Problem:
Insert a new node before the tail of a Doubly Linked List.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // Print DLL
  print(head) {
    let current = head;

    while (current) {
      process.stdout.write(current.value + " ");
      current = current.next;
    }

    console.log();
  }

  // Insert before tail
  insertBeforeTail(head, value) {
    // Empty list
    if (head === null) {
      return new Node(value);
    }

    // Only one node
    if (head.next === null) {
      const newNode = new Node(value);

      newNode.next = head;
      head.prev = newNode;

      return newNode;
    }

    // Reach the tail
    let tail = head;

    while (tail.next !== null) {
      tail = tail.next;
    }

    const prevNode = tail.prev;
    const newNode = new Node(value);

    // Connect new node
    newNode.prev = prevNode;
    newNode.next = tail;

    // Update surrounding nodes
    prevNode.next = newNode;
    tail.prev = newNode;

    return head;
  }
}

// -------------------- Test --------------------

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

const dll = new DoublyLinkedList();

console.log("Before:");
dll.print(head);

head = dll.insertBeforeTail(head, 25);

console.log("After:");
dll.print(head);
