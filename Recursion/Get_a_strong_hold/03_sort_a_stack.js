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

function insert(stack, temp) {
  // Base case: if the stack is empty or temp is larger than the top element
  if (stack.length === 0 || stack[stack.length - 1] <= temp) {
    stack.push(temp);
    return;
  }

  // Pop the top element and recursively insert
  let val = stack.pop();
  insert(stack, temp);

  // Push the popped element back
  stack.push(val);
}

function sortStack(stack) {
  if (stack.length > 0) {
    let temp = stack.pop();
    sortStack(stack);
    insert(stack, temp);
  }
}

// Main function
let stack = [4, 1, 3, 2];
sortStack(stack);

// Print the sorted stack
console.log("Sorted stack (descending order):", stack);
