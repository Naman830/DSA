/*

A linked list can only move forward, not backward. So the brute force idea is:

Traverse the linked list.
Store every node's value in an array.
Traverse the linked list again.
Replace each node's value using the array from the end.

Important: We are not reversing the links. We are only reversing the values stored inside the nodes.
*/
