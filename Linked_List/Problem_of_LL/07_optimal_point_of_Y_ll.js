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

/*
When Pointer A finishes List A,
instead of stopping,
it starts from List B.
Similarly,

when Pointer B finishes List B,
it starts from List A.
Now look at the total distance.

Pointer A travels

List A + List B
Pointer B also travels
List B + List A
Both travel exactly the same distance.

Therefore, they become synchronized.
*/
