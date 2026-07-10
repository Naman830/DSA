/*

A linked list can only move forward, not backward. So the brute force idea is:

Traverse the linked list.
Store every node's value in an array.
Traverse the linked list again.
Replace each node's value using the array from the end.

Important: We are not reversing the links. We are only reversing the values stored inside the nodes.
*/

/*
Algorithm

Create an empty array

Traverse linked list
    push every node value into array

Start again from head

Take index = array.length - 1

While current node exists
    current.val = array[index]
    index--
    current = current.next

Return head
*/
