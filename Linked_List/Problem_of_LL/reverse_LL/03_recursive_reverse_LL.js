/*
We cannot move backwards in a singly linked list.
Recursion automatically stores previous nodes in the call stack.
We first travel to the last node.
While returning from recursion, we reverse every link.
*/

/*
Pseudocode

reverse(head)

If head is null
    return null

If head.next is null
    return head

newHead = reverse(head.next)

head.next.next = head
head.next = null

return newHead
*/
/*
Problem:
Reverse a Singly Linked List using Recursion.

Input:
1 -> 2 -> 3 -> 4 -> 5

Output:
5 -> 4 -> 3 -> 2 -> 1
*/

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at tail
  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  // Reverse using Recursion
  reverse(head) {
    // Base Case
    if (head === null || head.next === null) {
      return head;
    }

    // Reverse remaining list
    const newHead = this.reverse(head.next);

    // Reverse current link
    head.next.next = head;

    // Remove old link
    head.next = null;

    return newHead;
  }

  // Print List
  print(head = this.head) {
    let temp = head;

    while (temp !== null) {
      process.stdout.write(temp.data + " -> ");
      temp = temp.next;
    }

    console.log("null");
  }
}

// -----------------------------

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log("Original List:");
list.print();

list.head = list.reverse(list.head);

console.log("\nReversed List:");
list.print();
