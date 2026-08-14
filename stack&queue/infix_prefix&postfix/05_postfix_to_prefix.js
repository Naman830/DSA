/*
Explanation:-
Read postfix from left → right, and use a stack to build expressions.

Postfix:  A B + C *
Prefix:   * + A B C

===============================================================================
Easy Formula:-
===============================================================================
        operator
           ↓
Postfix: A B +

Pop B → first
Pop A → second

Prefix:
operator + second + first   ---> most important rule

       +
      / \
     A   B

→ +AB

===============================================================================
For *:
===============================================================================
Postfix: A B + C *

First part: +AB

       *
      / \
    +AB  C

→ *+ABC

TC: O(n) && SC: O(n)
*/

function postfixToPrefix(expression) {
  const stack = [];

  for (const ch of expression) {
    // Ignore spaces
    if (ch === " ") continue;

    // If operand, push it into the stack
    if (/[a-zA-Z0-9]/.test(ch)) {
      stack.push(ch);
    }
    // If operator, pop two expressions
    else {
      const first = stack.pop();
      const second = stack.pop();

      // Operator comes before both operands
      const result = ch + second + first;

      // Push the new expression back
      stack.push(result);
    }
  }

  // Final expression is the Prefix expression
  return stack.pop();
}

console.log(postfixToPrefix("AB+C*"));
// *+ABC

console.log(postfixToPrefix("AB+"));
// +AB

console.log(postfixToPrefix("ABC*+"));
// +A*BC
