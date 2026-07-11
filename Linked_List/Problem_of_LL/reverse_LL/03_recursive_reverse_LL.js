/*
We cannot move backwards in a singly linked list.
Recursion automatically stores previous nodes in the call stack.
We first travel to the last node.
While returning from recursion, we reverse every link.
*/

/*
Pseudocode

reverse(head)

If head is null
    return null

If head.next is null
    return head

newHead = reverse(head.next)

head.next.next = head
head.next = null

return newHead
*/
