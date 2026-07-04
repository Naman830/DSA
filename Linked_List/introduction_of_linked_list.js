// ============================================
// LINKED LIST — INTRODUCTION (JavaScript)
// ============================================

// ---------------------------------------------
// 1. WHAT IS A LINKED LIST?
// ---------------------------------------------
// A Linked List is a linear data structure where elements (called "Nodes")
// are NOT stored in contiguous memory (unlike arrays).
// Each Node stores:
//    -> data (the value)
//    -> a pointer/reference to the NEXT node
//
// Think of it like a chain: Node1 -> Node2 -> Node3 -> null
// Instead of Index it store next value like Node1 (next= m2) -> Node2 (next = m3) -> Node3 (next = m4) -> Node4 (null)
// The last node points to "null" (means end of list)
// First Node called 'Head' and last node called 'Tail

// ---------------------------------------------
// 2. WHERE IS IT USED?
// ---------------------------------------------
// - When you need frequent insertions/deletions (no shifting like arrays)
// - Implementing Stacks, Queues, Graphs (adjacency list)
// - Browser history (prev/next page navigation)
// - Music playlist (next/previous song)
// - Undo functionality in editors

// ---------------------------------------------
// 3. "CLASS" IN JAVASCRIPT (equivalent of struct/class in C++/Java)
// ---------------------------------------------
// JS doesn't have "struct", only objects & classes.
// We use a class to define what a single Node looks like.

class Node {
  constructor(value) {
    this.value = value; // stores the actual data
    this.next = null; // pointer to next node, initially empty
  }
}

// Example: creating one node manually
const firstNode = new Node(10);
console.log(firstNode);
// Output: Node { value: 10, next: null }

// ---------------------------------------------
// 4. MEMORY SPACE USED
// ---------------------------------------------
// Array: elements sit in one continuous memory block (fixed pre-allocated size in most languages)
// Linked List: each node is stored ANYWHERE in memory (non-contiguous),
// connected only through "next" pointers/references.
// Extra memory is used per node to store the "next" reference (unlike arrays).

// ---------------------------------------------
// 5. DIFFERENCE BETWEEN NODE & NODE* (pointer to node)
// ---------------------------------------------
// In C++/Java, "Node" is the object, and "Node*" (or a reference) is a
// POINTER that stores the ADDRESS of a Node.
//
// In JavaScript, we don't manually deal with pointers/addresses.
// Every object (including a Node) is automatically handled by REFERENCE.
// So when we write: `this.next = someNode`
// -> "next" is not storing the node itself, it's referencing/pointing to it,
//    JS handles this "pointer-like" behavior internally for us.
