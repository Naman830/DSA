/*
Linked List:
10 → 20 → 30 → 40 → 50 → null

k = 3
Delete the 3rd node (30)

Output:
10 → 20 → 40 → 50 → null

2. Key Observations
Linked lists don't support direct indexing like arrays.
To delete a node, we need access to the previous node.
Special case:
If k = 1, simply delete the head.
If k is greater than the length of the list, nothing should happen (or return the original list).
 */
