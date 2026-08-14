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
*/
