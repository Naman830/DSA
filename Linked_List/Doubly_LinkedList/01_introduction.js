// Introduction to Doubly Linked List (JavaScript)

/*
1. What is a Doubly Linked List?

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
