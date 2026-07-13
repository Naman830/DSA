/*
You are given the head of a singly linked list.
Your task is to delete the middle node and return the updated linked list.
If the linked list has only one node, deleting the middle node means the list becomes empty (null).

Key Observations (Short)
If there is only one node, return null.
We need the node before the middle because in a singly linked list we cannot move backward.
Once we get the previous node:
prev.next = middle.next
The middle node gets skipped (deleted).
*/
