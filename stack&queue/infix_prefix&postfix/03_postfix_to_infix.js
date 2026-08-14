/*
Postfix: A B +
Infix:   A + B

STEP BY STEP EXAMPLE
Let's convert: AB+C*
| Step | Character | Action                       | Stack         |
| ---: | :-------: | ---------------------------- | ------------- |
|    1 |    `A`    | Push                         | `[A]`         |
|    2 |    `B`    | Push                         | `[A, B]`      |
|    3 |    `+`    | Pop A, B → `(A+B)`           | `[(A+B)]`     |
|    4 |    `C`    | Push                         | `[(A+B), C]`  |
|    5 |    `*`    | Pop C, `(A+B)` → `((A+B)*C)` | `[((A+B)*C)]` |
*/

/*
Approach:
1. Scan the postfix expression from left to right.
2. If the character is an operand, push it into the stack.
3. If the character is an operator:
   - Pop the right operand.
   - Pop the left operand.
   - Create (left operator right).
   - Push the new expression back into the stack.
4. The final stack element is the infix expression.
*/

function postfixToInfix(postfix) {
  const stack = [];

  for (const ch of postfix) {
    // If character is an operand, push it into the stack
    if (/[a-zA-Z0-9]/.test(ch)) {
      stack.push(ch);
    } else {
      // First popped = right operand
      const right = stack.pop();

      // Second popped = left operand
      const left = stack.pop();

      // Create infix expression and push it back
      stack.push(`(${left}${ch}${right})`);
    }
  }

  // The final element is the complete infix expression
  return stack[0];
}

console.log(postfixToInfix("AB+C*"));
// ((A+B)*C)

console.log(postfixToInfix("AB-CD+*"));
// ((A-B)*(C+D))
