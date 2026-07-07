/*
Original DLL:
10 ⇄ 20 ⇄ 30 ⇄ 40

Insert 25 at k = 3

Result:
10 ⇄ 20 ⇄ 25 ⇄ 30 ⇄ 40

DLL has both next and prev.
Need to update 4 pointers when inserting in the middle.
If k == 1, it becomes insert at head.
If k == length + 1, it becomes insert at tail.
*/
