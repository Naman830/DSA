// This question is similar to delete k just now we given a element to dleet

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  deleteElement(head, target) {
    // Empty list
    if (head === null) {
      return null;
    }

    // Delete head node
    if (head.value === target) {
      return head.next;
    }

    let current = head;

    // Find the previous node of the target
    while (current.next !== null) {
      if (current.next.value === target) {
        // Skip the target node
        current.next = current.next.next;
        return head;
      }

      current = current.next;
    }

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

// Test
const list = new LinkedList();

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

list.print(head);

head = list.deleteElement(head, 30);

list.print(head);

/*
| Case    | Complexity                             |
| ------- | -------------------------------------- |
| Best    | **O(1)** (if the value is at the head) |
| Average | **O(n)**                               |
| Worst   | **O(n)**                               |


SC: O(1)
*/
