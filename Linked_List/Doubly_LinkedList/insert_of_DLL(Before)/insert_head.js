/*
Before:
NULL <- 20 <-> 30 <-> 40 -> NULL

Insert 10

After: 
NULL <- 10 <-> 20 <-> 30 <-> 40 -> NULL

Key Observations
The new node becomes the first node.
The new node's next should point to the old head.
The old head's prev should point back to the new node.
The new node's prev will always be null.
If the list is empty, simply return the new node.
*/
