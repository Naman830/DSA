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
