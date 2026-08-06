/*
Infix   : A + B * C
          ↓ Reverse
          C * B + A
          ↓ Postfix
          C B * A +
          ↓ Reverse
Prefix  : + A * B C

Key Observations (Short)
Operators have precedence.
Parentheses have the highest priority.
Prefix scans from right → left (or we can reverse the infix and use postfix logic).
We use a stack to temporarily store operators.
*/

/*
Algorithm

1. Reverse infix
2. Swap brackets ( and ) 
3. Convert to postfix
4. Reverse postfix
Done

TC: O(n) && SC: O(n)
*/

// Returns priority of operators
function precedence(ch) {
  if (ch === "^") return 3;
  if (ch === "*" || ch === "/") return 2;
  if (ch === "+" || ch === "-") return 1;
  return 0;
}

// Converts Infix expression to Postfix
function infixToPostfix(expression) {
  let stack = [];
  let postfix = "";

  for (const ch of expression) {
    // If character is an operand, add it to postfix
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      postfix += ch;
    }

    // If opening bracket, push into stack
    else if (ch === "(") {
      stack.push(ch);
    }

    // If closing bracket, pop until opening bracket
    else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop(); // Remove '('
    }

    // If operator
    else {
      // Pop operators with higher or equal priority
      while (
        stack.length &&
        precedence(stack[stack.length - 1]) >= precedence(ch)
      ) {
        postfix += stack.pop();
      }

      // Push current operator
      stack.push(ch);
    }
  }

  // Add remaining operators
  while (stack.length) {
    postfix += stack.pop();
  }

  return postfix;
}

// Converts Infix expression to Prefix
function infixToPrefix(expression) {
  // Reverse the expression
  let reversed = expression.split("").reverse().join("");

  // Swap opening and closing brackets
  let swapped = "";

  for (const ch of reversed) {
    if (ch === "(") swapped += ")";
    else if (ch === ")") swapped += "(";
    else swapped += ch;
  }

  // Convert swapped expression to postfix
  let postfix = infixToPostfix(swapped);

  // Reverse postfix to get prefix
  return postfix.split("").reverse().join("");
}

// Test cases
console.log(infixToPrefix("A+B*C")); // +A*BC
console.log(infixToPrefix("(A+B)*C")); // *+ABC
console.log(infixToPrefix("A+B*C-D")); // -+A*BCD
