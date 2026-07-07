/*
Original DLL:
10 ⇄ 20 ⇄ 30 ⇄ 40

Insert 25 at k = 3

Result:
10 ⇄ 20 ⇄ 25 ⇄ 30 ⇄ 40

DLL has both next and prev.
Need to update 4 pointers when inserting in the middle.
If k == 1, it becomes insert at head.
If k == length + 1, it becomes insert at tail.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
/*
Problem:
Insert a node with value 'value' at the Kth position
in a Doubly Linked List.
*/
/*
Problem:
Insert a node with value 'value' at the Kth position
in a Doubly Linked List.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  insertKth(head, k, value) {
    const newNode = new Node(value);

    // Empty list
    if (head === null) return newNode;

    // Insert at head
    if (k === 1) {
      newNode.next = head;
      head.prev = newNode;
      return newNode;
    }

    // Reach (k-1)th node
    let current = head;
    let count = 1;

    while (current !== null && count < k - 1) {
      current = current.next;
      count++;
    }

    // Invalid position
    if (current === null) return head;

    // Connect new node
    newNode.next = current.next;
    newNode.prev = current;

    // Update next node's prev pointer
    if (current.next !== null) {
      current.next.prev = newNode;
    }

    // Update previous node's next pointer
    current.next = newNode;

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

// ---------------- Test ----------------

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

head = dll.insertKth(head, 3, 25);

console.log("After:");
dll.print(head);
