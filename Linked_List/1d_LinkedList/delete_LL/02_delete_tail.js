/*
Before:
Head
 ↓
10 → 20 → 30 → 40 → null


After deleting tail:
Head
 ↓
10 → 20 → 30 → null
*/

/*
Problem:
Delete the tail (last node) of a singly linked list.
Return the updated head.
*/

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  // Delete the last node
  deleteTail(head) {
    // Case 1: Empty list
    if (head === null) {
      return null;
    }

    // Case 2: Only one node
    if (head.next === null) {
      return null;
    }

    let current = head;

    // Stop at the second last node
    while (current.next.next !== null) {
      current = current.next;
    }

    // Remove the last node
    current.next = null;

    return head;
  }

  // Print the linked list
  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }

    console.log("null");
  }
}

// ----------------------------
// Create linked list
// 10 -> 20 -> 30 -> 40
// ----------------------------

const list = new LinkedList();

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log("Before deleting tail:");
list.print(head);

head = list.deleteTail(head);

console.log("After deleting tail:");
list.print(head);

/*
| Case    | Complexity                  |
| ------- | --------------------------- |
| Best    | **O(1)** (single-node list) |
| Average | **O(n)**                    |
| Worst   | **O(n)**                    |

SC: O(1)
*/
