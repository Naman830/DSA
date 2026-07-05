/*
Before:
10 → 20 → 30 → 40 → null

Insert 25 at k = 2

After:
10 → 20 → 25 → 30 → 40 → null

2. Key Observations
If k == 0, insert at the head.
Otherwise, move to the (k-1)th node.
Create a new node.
Connect it between two nodes.
*/

// Problem:
// Insert a new node with the given value at the Kth position
// (0-based indexing) in a singly linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  insertAtK(head, value, k) {
    const newNode = new Node(value);

    // Case 1: Insert at the beginning
    if (k === 0) {
      newNode.next = head;
      return newNode;
    }

    let current = head;
    let index = 0;

    // Move to the (k-1)th node
    while (current !== null && index < k - 1) {
      current = current.next;
      index++;
    }

    // Invalid position
    if (current === null) {
      return head;
    }

    // Insert the new node
    newNode.next = current.next;
    current.next = newNode;

    return head;
  }

  print(head) {
    let current = head;
    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// -------------------- Test --------------------

const list = new LinkedList();

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log("Before:");
list.print(head);

head = list.insertAtK(head, 25, 2);

console.log("After inserting 25 at index 2:");
list.print(head);
