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
