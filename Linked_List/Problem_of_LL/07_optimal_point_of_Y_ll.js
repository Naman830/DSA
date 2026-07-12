// Optimal Solution (Two Pointer Switching)

/*
Instead of calculating the lengths of both linked lists, we can make both pointers travel the same total distance.

The trick is simple:

Pointer A starts from headA.
Pointer B starts from headB.
Whenever a pointer reaches the end (null), instead of stopping, it jumps to the head of the other linked list.

Eventually:

If the lists intersect, both pointers will meet at the intersection.
If they don't intersect, both pointers will become null at the same time.
*/
