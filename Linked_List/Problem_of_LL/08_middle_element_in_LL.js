/*
If the linked list has an odd number of nodes, there is only one middle node.

If the linked list has an even number of nodes, most interview questions (including LeetCode 876) ask you to return the second middle node.
*/

// Approach 1 — Brute Force (Count Nodes)
/*
First count the total number of nodes.
Once we know the length, calculate

middle = Math.floor(length / 2)

Then traverse again until that index.
So this requires two traversals.
*/
