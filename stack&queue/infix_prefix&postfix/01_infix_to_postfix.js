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
*/

function precedence(ch) {
  if (ch === "^") return 3;
  if (ch === "*" || ch === "/") return 2;
  if (ch === "+" || ch === "-") return 1;
  return 0;
}

function infixToPostix(expression) {
  const stack = [];
  let postfix = "";

  for (const ch of expression) {
    if (ch === " ") continue;

    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      postfix += ch;
    } else if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      while (stack[stack.length - 1] !== "(") {
        postfix += stack.pop;
      }
      stack.pop();
    }
  }
}
