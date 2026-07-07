/*
Before:
10 ⇄ 20 ⇄ 30 ⇄ 40

Insert 25 before the tail (40).

After:
10 ⇄ 20 ⇄ 30 ⇄ 25 ⇄ 40

Key Observations
Tail is the last node (next == null).
We need the node before the tail.
Since it's a DLL, updating both next and prev pointers is important.

Edge cases:
Empty list
Only one node
Two or more nodes
*/

/*
OPTIMAL APPROACH IDEA

Idea
Reach the tail.
Let: tail = last node

prevNode = node before tail
Create a new node.
Connect all four pointers properly.
*/
