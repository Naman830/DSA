// Introduction to Recursion, Recursion Tree, and Stack Space

// Recursion means:
// A function calling itself again and again to solve a smaller version of the same problem.

/* 
Real-Life Example of Recursion

Imagine you have 5 boxes inside each other.

Box 5
  Box 4
    Box 3
      Box 2
        Box 1

To open Box 5, you need to open Box 4.
To open Box 4, you need to open Box 3.
To open Box 3, you need to open Box 2.
To open Box 2, you need to open Box 1.

When Box 1 is opened, the process stops.

This is exactly how recursion works.
*/

// Basic Structure of Recursion
function printNumber(n) {
  // Base case: when n becomes 0, stop recursion
  // [The condition where recursion stops.]
  if (n === 0) {
    return;
  }

  // Work done before recursive call
  console.log(n);

  // Recursive call with smaller problem
  // The part where function calls itself with a smaller input.
  printNumber(n - 1);
}

printNumber(5);
