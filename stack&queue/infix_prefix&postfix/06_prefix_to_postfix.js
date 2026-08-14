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
