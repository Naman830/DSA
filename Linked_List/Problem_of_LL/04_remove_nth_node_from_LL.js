/*
Imagine a linked list:
1 → 2 → 3 → 4 → 5

If n = 2

We have to remove the 2nd node from the end.
Count from the end:
5  ← 1st
4  ← 2nd   ❌ Remove this
3  ← 3rd
2  ← 4th
1  ← 5th

Answer becomes
1 → 2 → 3 → 5

The challenge is:
We only know how to move forward in a singly linked list.
We cannot move backwards.
So how do we find the node from the end?
*/

// 1. Approach 1 (Brute Force)

/*
Approach 1 (Brute Force)

Step 1
Count total nodes.

1 → 2 → 3 → 4 → 5
Length = 5

Step 2
Find which node to remove from the front.

Formula
Position from front = Length - n + 1

Example
Length = 5
n = 2

5 - 2 + 1 = 4

Remove 4th node.
1
2
3
4 ❌
5

Step 3- connect the previous node to next next node 

Time Complexity O(N) + O(N) = O(2N)
Space: O(1)
*/
