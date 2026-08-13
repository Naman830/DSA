/*
a + b * ( c ^ d - c )

| Step | Scan | Action                                               | Stack        | Postfix     |
| ---- | ---- | ---------------------------------------------------- | ------------ | ----------- |
| 1    | `a`  | Operand → Add to postfix                             |              | `a`         |
| 2    | `+`  | Stack empty → Push                                   | `+`          | `a`         |
| 3    | `b`  | Operand → Add to postfix                             | `+`          | `ab`        |
| 4    | `*`  | `*` has higher priority than `+` → Push              | `+  *`       | `ab`        |
| 5    | `(`  | Push `(`                                             | `+  *  (`    | `ab`        |
| 6    | `c`  | Operand → Add to postfix                             | `+  *  (`    | `abc`       |
| 7    | `^`  | Top is `(` → Push                                    | `+  *  (  ^` | `abc`       |
| 8    | `d`  | Operand → Add to postfix                             | `+  *  (  ^` | `abcd`      |
| 9    | `-`  | `^` has higher priority → **Pop `^`**, then push `-` | `+  *  (  -` | `abcd^`     |
| 10   | `c`  | Operand → Add to postfix                             | `+  *  (  -` | `abcd^c`    |
| 11   | `)`  | Pop until `(`                                        | `+  *`       | `abcd^c-`   |
| 12   | End  | Pop `*`                                              | `+`          | `abcd^c-*`  |
| 13   | End  | Pop `+`                                              |              | `abcd^c-*+` |


Time Complexity:
Best    : O(n)
Average : O(n)
Worst   : O(n)

Space Complexity:
Best    : O(1)
Average : O(n)
Worst   : O(n)
*/

// Return priority of operators
function precedence(ch) {
  if (ch === "^") return 3;
  if (ch === "*" || ch === "/") return 2;
  if (ch === "+" || ch === "-") return 1;
  return 0;
}

function infixToPostfix(expression) {
  let stack = [];
  let postfix = "";

  // Check every character
  for (let ch of expression) {
    // Skip spaces
    if (ch === " ") continue;

    // If operand, add to postfix
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      postfix += ch;
    }

    // Push opening bracket
    else if (ch === "(") {
      stack.push(ch);
    }

    // Pop until '('
    else if (ch === ")") {
      while (stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }

      // Remove '('
      stack.pop();
    }

    // If operator
    else {
      // Pop higher priority operators
      while (
        stack.length > 0 &&
        stack[stack.length - 1] !== "(" &&
        // Higher priority
        (precedence(stack[stack.length - 1]) > precedence(ch) ||
          // Same priority (except '^')
          (precedence(stack[stack.length - 1]) === precedence(ch) &&
            ch !== "^"))
      ) {
        postfix += stack.pop();
      }

      // Push current operator
      stack.push(ch);
    }
  }

  // Pop remaining operators
  while (stack.length > 0) {
    postfix += stack.pop();
  }

  return postfix;
}

console.log(infixToPostfix("a+b*(c^d-c)")); // abcd^c-*+
console.log(infixToPostfix("(a+b)*c")); // ab+c*
console.log(infixToPostfix("a+b*c")); // abc*+
console.log(infixToPostfix("a^b^c")); // abc^^
