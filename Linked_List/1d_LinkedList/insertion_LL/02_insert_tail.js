/*
Before:
10 → 20 → 30 → null

Insert 40

After:
10 → 20 → 30 → 40 → null

2. Key Observations
If the list is empty (head === null), the new node becomes the head.
Otherwise, move until you reach the last node.
The last node is the node whose next is null.
Connect the last node to the new node.
*/
