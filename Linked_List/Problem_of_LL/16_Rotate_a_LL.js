/*
You are given the head of a linked list and an integer k
Your task is to rotate the linked list to the right by k positions.

When we rotate once to the right:
The last node becomes the first node and Everything else shifts one position to the right.

Input:
1 → 2 → 3 → 4 → 5
k = 2

Rotate once:
5 → 1 → 2 → 3 → 4

Rotate twice:
4 → 5 → 1 → 2 → 3

Output:
4 → 5 → 1 → 2 → 3
*/

// 1. Brute Force Approach
/*
Rotate the list one step at a time.

For every rotation:

Find the last node.
Find the second last node.
Disconnect the last node.
Put it before the head.

Repeat this k times.
*/
