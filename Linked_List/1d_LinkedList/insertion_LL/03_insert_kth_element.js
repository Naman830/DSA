/*
Before:
10 → 20 → 30 → 40 → null

Insert 25 at k = 2

After:
10 → 20 → 25 → 30 → 40 → null

2. Key Observations
If k == 0, insert at the head.
Otherwise, move to the (k-1)th node.
Create a new node.
Connect it between two nodes.
*/
