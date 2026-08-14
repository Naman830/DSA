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
