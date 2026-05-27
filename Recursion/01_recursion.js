// Introduction to Recursion, Recursion Tree, and Stack Space

// Recursion means:
// A function calling itself again and again to solve a smaller version of the same problem.

// ====================================================================
// ====================================================================
// ====================================================================

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

// ====================================================================
// ====================================================================
// ====================================================================

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

// ====================================================================
// ====================================================================
// ====================================================================

// Stack Space in Recursion
// Stack space means: Extra memory used by recursive function calls. O(n)

/*
Difference: Time Complexity vs Stack Space

Time Complexity
How many total calls happen.

Stack Space
How many calls are active at the same time.
*/

// ====================================================================
// ====================================================================
// ====================================================================

// Types of Recursion

/*
1. Linear Recursion
One function calls itself one time.

2. Tree Recursion
One function calls itself more than one time.

3. Tail Recursion
Recursive call is the last operation in the function.

4. Head Recursion
Recursive call happens before the main work.
*/


// ====================================================================
// ====================================================================
// ====================================================================

// Recursion Tree and Complexity
// A recursion tree helps us calculate time complexity.

function solve(n) {
  if (n === 0) return;

  solve(n - 1);
  solve(n - 1);
}
/*
TREE:
             n
          /     \
       n-1       n-1
      /   \     /   \
   n-2   n-2  n-2   n-2

So time complexity:
O(2^n)
*/

// ====================================================================
// ====================================================================
// ====================================================================

// Stack Overflow
// If recursion never stops or goes too deep, stack memory becomes full.
// This error is called: Stack Overflow

function infinite() {
  console.log("Hello");
  infinite();
}

infinite();

// This function has no base case. So it keeps calling itself forever.

// ====================================================================
// ====================================================================
// ====================================================================

// How to Write Recursive Code

/*
Step 1: Identify the smaller problem
Ask: Can I solve this problem using a smaller version of the same problem?

Example:
sum(n) = n + sum(n - 1)
// ====================================================================

Step 2: Write the base case
Ask: Where should the recursion stop?

Example:
if (n === 1) return 1;
// ====================================================================

Step 3: Write recursive relation
Ask: How do I connect current answer with smaller answer?

Example: return n + sumOfN(n - 1);
*/
