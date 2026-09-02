/*
Explanation:-
1. Given n pairs of parentheses, generate all valid combinations.
2. The important part is that every ( must eventually have a matching ) and the parentheses must never become invalid.

Key Observations:- 
For n = 3:

Total ( available = 3
Total ) available = 3

i. We can add ( if: open < n

ii. We can add ) only if: close < open

Why close < open?
Because we cannot close something that hasn't been opened.

For example:
")(" ❌ is invalid.

But:
"()" ✅ is valid.
*/
