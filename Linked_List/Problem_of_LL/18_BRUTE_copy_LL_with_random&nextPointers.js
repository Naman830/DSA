// HASHMAP SOLUTION

/*
EXPLANATION: You are given a linked list where each node contains:
next → points to the next node.
random → points to any node in the list (or null).

TASK: Create a deep copy of the linked list.
Deep Copy: Create completely new nodes. The copied list should not share any node with the original list.

Key Observations:
Every original node must have a newly created node.
next pointers are easy to copy.
random pointers are difficult because they can point anywhere.
We need a way to quickly find the copied version of any original node.
*/
