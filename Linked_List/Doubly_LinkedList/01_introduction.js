// Introduction to Doubly Linked List (JavaScript)

/*
// ===========================================================================================
1. What is a Doubly Linked List?
// ===========================================================================================

A Doubly Linked List (DLL) is a type of linked list where each node stores three things:

Data (value)
Pointer to the next node
Pointer to the previous node

Unlike a Singly Linked List, you can move in both forward and backward directions.

Structure of a Node
┌────────┬────────┬────────┐
│  Prev  │ Value  │  Next  │
└────────┴────────┴────────┘
Example
null ← [10] ⇄ [20] ⇄ [30] → null

Here,
10's previous = null
10's next = 20
20's previous = 10
20's next = 30
30's previous = 20
30's next = null
*/

// ===========================================================================================
// Singly vs Doubly Linked List
// ===========================================================================================

/*
| Singly Linked List        | Doubly Linked List            |
| ------------------------- | ----------------------------- |
| One pointer (`next`)      | Two pointers (`prev`, `next`) |
| Can move only forward     | Can move forward & backward   |
| Uses less memory          | Uses more memory              |
| Deleting a node is harder | Deleting is easier            |
| Simpler implementation    | Slightly more complex         |
*/

// ===========================================================================================
// Creating a node for a Doubly Linked List
// ===========================================================================================

class Node {
  constructor(value) {
    this.value = value; // Store data
    this.prev = null; // Previous node
    this.next = null; // Next node
  }
}

// Creating the Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
}

const list = new DoublyLinkedList();

const first = new Node(10);
const second = new Node(20);
const third = new Node(30);

// Connect nodes
first.next = second;
second.prev = first;

second.next = third;
third.prev = second;

// Set head
list.head = first;

console.log(list);

/*
// ===========================================================================================
Memory Representation
// ===========================================================================================

                head
                 │
                 ▼

        ┌─────────────────────────────┐
null ←  │ 10 │ prev:null │ next ──────┼──────┐
        └─────────────────────────────┘      │
                                             ▼
        ┌─────────────────────────────┐
        │ 20 │ prev ◄───────┐ next ───┼──────┐
        └─────────────────────────────┘      │
                 ▲                           ▼
                 │                 ┌─────────────────────────────┐
                 └──────────────── │ 30 │ prev ◄───────┐ next:null│
                                   └─────────────────────────────┘
*/

/*
Advantages
Traverse in both directions.
Easier insertion before or after any node.
Easier deletion because the previous node is directly available.
Used in browser history, undo/redo operations, music playlists, and LRU caches.

Disadvantages
Extra memory is required for the prev pointer.
More pointer updates during insertion and deletion.
Slightly more complex than a Singly Linked List.
*/

/*
| Operation       | Best                 | Average  | Worst    |
| --------------- | -------------------- | -------- | -------- |
| Traverse        | **O(1)** (head only) | **O(n)** | **O(n)** |
| Search          | **O(1)**             | **O(n)** | **O(n)** |
| Access kth node | **O(1)** (head/tail) | **O(n)** | **O(n)** |

Space Complexity:
O(n) for storing n nodes.
Each node uses extra space for one additional pointer (prev).
*/
