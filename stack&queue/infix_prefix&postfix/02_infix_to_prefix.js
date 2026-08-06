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
