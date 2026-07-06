/*
Before deletion
NULL <- [10] <-> [20] <-> [30] -> NULL
        ^
       head

After deleting head
NULL <- [20] <-> [30] -> NULL
        ^
       head

The node 10 is removed.

Key Observations
If the list is empty → return null.
If only one node exists → deleting it makes the list empty.
Otherwise:
Move head to second node.
Make new head's prev = null.
*/
