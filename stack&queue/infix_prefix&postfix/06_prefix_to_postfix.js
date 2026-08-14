/*
Explanation:-
| Expression Type | Example |
| --------------- | ------- |
| Infix           | `A + B` |
| Prefix          | `+AB`   |
| Postfix         | `AB+`   |

Easy way to remember:-

    Scan ← RIGHT TO LEFT
             ↓
    Operand → PUSH
             ↓
    Operator → POP 2
             ↓
    second + first + operator
             ↓
           PUSH

| Approach    | Idea                                           |     Time |    Space |
| ----------- | ---------------------------------------------- | -------: | -------: |
| Brute Force | Repeatedly find operators and combine operands |    O(n²) |     O(n) |
| Optimal     | Stack + right-to-left traversal                | **O(n)** | **O(n)** |
*/

function prefixToPostfix(expression) {
  const stack = [];

  // Scan from right to left
  for (let i = expression.length - 1; i >= 0; i--) {
    const ch = expression[i];

    // If operand, push it into the stack
    if (/[A-Za-z0-9]/.test(ch)) {
      stack.push(ch);
    }

    // If operator, pop two operands
    else {
      const first = stack.pop();
      const second = stack.pop();

      // Operator comes at the end in postfix
      const result = second + first + ch;

      stack.push(result);
    }
  }

  return stack.pop();
}

console.log(prefixToPostfix("*+ABC")); // AB+C*
console.log(prefixToPostfix("-+ABC")); // AB+C-
console.log(prefixToPostfix("/AB")); // AB/
console.log(prefixToPostfix("+*ABC")); // AB*C+
