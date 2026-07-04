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
