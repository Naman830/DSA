/*
Key Observations

DLL has both next and prev pointers.
We first reach the kth node.

Then connect: 
previous node → next node 
next node → previous node

Special cases:
Delete head (k = 1)
Delete tail
Delete middle node
Invalid k
*/

/*
PSEUDO CODE

If head is null
    return null

If k == 1
    delete head

Move current to kth node

If current not found
    return head

prev = current.prev
next = current.next

If prev exists
    prev.next = next

If next exists
    next.prev = prev

return head
*/
/*
Problem:
Delete the kth node (1-based indexing)
from a Doubly Linked List.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  deleteKth(head, k) {
    // Empty list
    if (head === null) return null;

    // Delete Head
    if (k === 1) {
      head = head.next;

      if (head !== null) {
        head.prev = null;
      }

      return head;
    }

    // Move to kth node
    let current = head;
    let count = 1;

    while (current !== null && count < k) {
      current = current.next;
      count++;
    }

    // Invalid k
    if (current === null) {
      return head;
    }

    let prevNode = current.prev;
    let nextNode = current.next;

    // Connect previous node
    if (prevNode !== null) {
      prevNode.next = nextNode;
    }

    // Connect next node
    if (nextNode !== null) {
      nextNode.prev = prevNode;
    }

    return head;
  }

  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " ");
      current = current.next;
    }

    console.log();
  }
}

// Example

let head = new Node(10);
let second = new Node(20);
let third = new Node(30);
let fourth = new Node(40);
let fifth = new Node(50);

head.next = second;
second.prev = head;

second.next = third;
third.prev = second;

third.next = fourth;
fourth.prev = third;

fourth.next = fifth;
fifth.prev = fourth;

const dll = new DoublyLinkedList();

console.log("Before Deletion:");
dll.print(head);

head = dll.deleteKth(head, 3);

console.log("After Deleting 3rd Node:");
dll.print(head);
