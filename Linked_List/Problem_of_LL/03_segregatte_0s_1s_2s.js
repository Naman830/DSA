/*
Sort a Linked List of 0's, 1's and 2's

Suppose the linked list is
1 -> 0 -> 2 -> 1 -> 2 -> 0 -> 1

After sorting
0 -> 0 -> 1 -> 1 -> 1 -> 2 -> 2
*/

// 1. Approach 1 : Brute Force (Counting)
/*
Algorithm

Traverse once
    count 0
    count 1
    count 2

Traverse again

while count0 > 0
    node.data = 0

while count1 > 0
    node.data = 1

while count2 > 0
    node.data = 2
*/
