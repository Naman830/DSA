/*
Instead of storing original → copied node mapping in a HashMap,
we temporarily insert every copied node just after its original node.

Original List
1 → 2 → 3

After inserting copied nodes
1 → 1' → 2 → 2' → 3 → 3'

Now every copied node is immediately after its original node.
*/

/*
Algorithm

Insert copied node after every original node

Traverse again
    Connect random pointers

Traverse again
    Separate original and copied lists

Return copied head
*/
