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
