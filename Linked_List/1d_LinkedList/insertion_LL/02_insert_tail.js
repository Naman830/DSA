/*
Before:
10 → 20 → 30 → null

Insert 40

After:
10 → 20 → 30 → 40 → null

2. Key Observations
If the list is empty (head === null), the new node becomes the head.
Otherwise, move until you reach the last node.
The last node is the node whose next is null.
Connect the last node to the new node.
*/

// Problem:
// Insert a new node at the end (tail) of a singly linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // Insert a node at the tail
  insertTail(head, value) {
    // Insert a node at the tail
    // Create the new node
    const newNode = new Node(value);

    // If the list is empty,
    // the new node becomes the head.
    if (head === null) {
      return newNode;
    }

    // Start from the head
    let current = head;

    // Move until the last node
    while (current.next !== null) {
      current = current.next;
    }

    // Attach the new node
    current.next = newNode;

    // Return the original head
    return head;
  }

  // Print the linked list
  print(head) {
    let current = head;
    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> ") + " -> null");
  }
}

// -------------------- Test --------------------

const list = new LinkedList();

// Create initial list manually
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

list.print(head);

// Insert 40
head = list.insertTail(head, 40);

list.print(head);

// Insert 50
head = list.insertTail(head, 50);

list.print(head);

/*
| Case    | Time                        |
| ------- | --------------------------- |
| Best    | **O(1)** (if list is empty) |
| Average | **O(n)**                    |
| Worst   | **O(n)**                    |


SC: O(1)
*/
