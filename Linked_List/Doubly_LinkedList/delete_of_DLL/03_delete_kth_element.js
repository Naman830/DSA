/*
Key Observations

DLL has both next and prev pointers.
We first reach the kth node.

Then connect: 
previous node → next node 
next node → previous node

Special cases:
Delete head (k = 1)
Delete tail
Delete middle node
Invalid k
*/

/*
PSEUDO CODE

If head is null
    return null

If k == 1
    delete head

Move current to kth node

If current not found
    return head

prev = current.prev
next = current.next

If prev exists
    prev.next = next

If next exists
    next.prev = prev

return head
*/
