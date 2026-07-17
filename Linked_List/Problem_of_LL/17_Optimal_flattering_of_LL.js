/*
Instead of sorting everything,
Since every bottom list is already sorted, we merge them just like Merge Sort.
We recursively flatten from the right side.
*/

/*
Pseudocode
flatten(head)

if head == null OR head.next == null
    return head

right = flatten(head.next)

head = merge(head, right)

return head

*/

/*
Merge Pseudocode
merge(list1, list2)

dummy

while both exist
    smaller node becomes next
attach remaining nodes

return dummy.bottom
*/
