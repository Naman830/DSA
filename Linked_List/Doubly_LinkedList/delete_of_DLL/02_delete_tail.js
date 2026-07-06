/*
Key Observations
A singly linked list only moves forward.
We cannot directly reach the previous node of the tail.
Therefore, we must stop at the second last node.
Then make its next point to null.
*/
// Delete the tail node of a singly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  deleteTail(head) {
    // Empty list
    if (head === null) {
      return null;
    }

    // Only one node
    if (head.next === null) {
      return null;
    }

    let current = head;

    // Reach the second last node
    while (current.next.next !== null) {
      current = current.next;
    }

    // Remove last node
    current.next = null;

    return head;
  }

  print(head) {
    let current = head;

    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }

    console.log("null");
  }
}

// Creating the linked list
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

const list = new LinkedList();

console.log("Before Deletion:");
list.print(head);

head = list.deleteTail(head);

console.log("After Deletion:");
list.print(head);

/*
| Case    | Time                              |
| ------- | --------------------------------- |
| Best    | **O(1)** (empty list or one node) |
| Average | **O(n)**                          |
| Worst   | **O(n)**                          |

SC: O(1)
*/
