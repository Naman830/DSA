/*
Explanation:-
Read postfix from left → right, and use a stack to build expressions.

Postfix:  A B + C *
Prefix:   * + A B C

===============================================================================
Easy Formula:-
===============================================================================
        operator
           ↓
Postfix: A B +

Pop B → first
Pop A → second

Prefix:
operator + second + first

       +
      / \
     A   B

→ +AB

===============================================================================
For *:
===============================================================================
Postfix: A B + C *

First part: +AB

       *
      / \
    +AB  C

→ *+ABC
*/
