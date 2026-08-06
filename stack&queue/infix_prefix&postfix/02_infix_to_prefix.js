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
*/

function precedence(ch) {
  if (ch === "^") return 3;
  if (ch === "*" || ch === "/") return 2;
  if (ch === "+" || ch === "-") return 1;
  return 0;
}

function infixToPostfix(expression) {
  let stack = [];
  let postfix = "";

  for (const ch of expression) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      //CONTION-1
      postfix += ch;
    } else if (ch === "(") {
      // CONDITON-2
      stack.push(ch);
    } else if (ch === ")") {
      // CONTION-3
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      // LAST CONDITION
      while (
        stack.length &&
        precedence(stack[stack.length - 1] >= precedence(ch))
      ) {
        postfix += stack.pop();
      }
      stack.push(ch);
    }
  }

  while (stack.length) {
    postfix += stack.pop();
  }

  return postfix;
}

function infixToPrefix(expression) {
  let reversed = expression.split("").reverse().join("");

  let swapped = "";

  for (const ch of reversed) {
    if (ch === "(") swapped += ")";
    else if (ch === ")") swapped += "(";
    else swapped += ch;
  }

  let postfix = infixToPostfix(swapped);

  return postfix.split("").reverse().join("");
}

console.log(infixToPrefix("A+B*C")); // +A*BC
console.log(infixToPrefix("(A+B)*C")); // *+ABC
console.log(infixToPrefix("A+B*C-D")); // -+A*BCD
