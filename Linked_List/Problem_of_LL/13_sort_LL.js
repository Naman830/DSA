/*
You are given the head of a singly linked list.
Your task is to sort the linked list in ascending order and return the new head.

Key Observations
Arrays can be sorted easily because we have random access.
Linked Lists don't allow random access.
Algorithms like Quick Sort are not ideal for Linked Lists.
Merge Sort is the best sorting algorithm for Linked Lists.

Why?
Because Merge Sort only needs sequential access.
*/

// Approach 1 — Brute Force
/*
Traverse the linked list.
Store every value inside an array.
Sort the array.
Traverse the linked list again.

Replace every node's value.
We're not changing nodes, only changing values.
*/
/*
Pseudocode

Take all values into array
Sort array
Traverse linked list
Replace values one by one
*/
