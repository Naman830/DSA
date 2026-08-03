/*
Input: "({[]})"
Output: true

Input: "([)]"
Output: false

. Key Observations (Short)

Every opening bracket must have a matching closing bracket.
Closing brackets must appear in the correct order.
The last opened bracket must close first.
This follows LIFO (Last In First Out), so Stack is the perfect data structure.
*/

/*
Problem:
Given a string containing only (), {}, and [] brackets,
return true if the parentheses are balanced,
otherwise return false.

Example:
Input:  "{[()]}"
Output: true

Input:  "([)]"
Output: false
*/

function isBalanced(str) {
  // Stack to store opening brackets
  const stack = [];

  // Map each closing bracket to its matching opening bracket
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Traverse each character in the string
  for (const ch of str) {
    // If it is an opening bracket, push it into the stack
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      // If stack is empty, there is no opening bracket to match
      if (stack.length === 0) {
        return false;
      }

      // Remove the last opening bracket
      const top = stack.pop();

      // Check if the brackets match
      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched
  return stack.length === 0;
}

// ----------------------
// Test Cases
// ----------------------

console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("(((")); // false
console.log(isBalanced("{[]}")); // true
console.log(isBalanced("")); // true

/*
| Case    | Time                        | Space    |
| ------- | --------------------------- | -------- |
| Best    | **O(1)** *(first mismatch)* | **O(1)** |
| Average | **O(n)**                    | **O(n)** |
| Worst   | **O(n)**                    | **O(n)** |

 */
