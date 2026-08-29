/*
The goal is to sort all elements of a stack using recursion, without using another explicit stack/data structure.

for example:-
Before:        After:

   1              3
   3              2
   2              1
   4              4
  ---            ---
*/

/*
Recusion Approach:-

If the stack is empty, stop.
Remove the top element of the stack.
Sort the remaining stack recursively.
Insert the removed element back into the stack while maintaining descending order.
Use a helper function to place the element in its correct position.
*/
