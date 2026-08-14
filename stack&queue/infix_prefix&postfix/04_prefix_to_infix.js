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
*/
