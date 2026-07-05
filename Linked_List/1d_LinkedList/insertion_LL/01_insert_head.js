/*
Before:
Head
 ↓
10 → 20 → 30 → null

Insert 5

After:
Head
 ↓
5 → 10 → 20 → 30 → null

2. Key Observation

To insert at the beginning:

Create a new node.
Make the new node point to the current head.
Update the head to this new node.

Only 2 pointer changes are needed.
*/
