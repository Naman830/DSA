/*
Exaplanation:-
Prefix → Infix = Scan right to left + Stack [similar as postfix to infix]

Prefix: 
Infix:   (A + B) * C

Example:-
* + A B C
| Step | Character | Stack        | Action             |
| ---- | --------- | ------------ | ------------------ |
| 1    | `C`       | `[C]`        | Operand → push     |
| 2    | `B`       | `[C, B]`     | Operand → push     |
| 3    | `A`       | `[C, B, A]`  | Operand → push     |
| 4    | `+`       | `[C, (A+B)]` | Pop A, B → `(A+B)` |
| 5    | `*`       | `[(A+B)*C]`  | Pop `(A+B)`, C     |
*/

/*
Pattern:-
Scan:       RIGHT → LEFT
Data:       STACK

Operand → PUSH

Operator:
    ↓
POP left
POP right
    ↓
(left operator right)
    ↓
PUSH back

TC: O(n) && SC: O(n)
*/

function prefixToInfix(str) {
  const stack = [];

  // Scan Prefix expression from right to left
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];

    // If character is an operand, push it into the stack
    if (/[A-Za-z0-9]/.test(ch)) {
      stack.push(ch);
    }
    // If character is an operator
    else {
      // First popped element becomes the left operand
      const left = stack.pop();

      // Second popped element becomes the right operand
      const right = stack.pop();

      // Create the infix expression
      const expression = `(${left} ${ch} ${right})`;

      // Push the new expression back
      stack.push(expression);
    }
  }

  // The stack contains the final infix expression
  return stack[0];
}

console.log(prefixToInfix("*+ABC"));
// ((A + B) * C)

console.log(prefixToInfix("-A*BC"));
// (A - (B * C))
