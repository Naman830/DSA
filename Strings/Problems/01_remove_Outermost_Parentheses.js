/*
You are given a valid parentheses string.
Your task is to remove the outermost pair of parentheses from every primitive valid parentheses string.

Example
Input:  "(()())(())"

Primitive 1: (()())
Remove outermost -> ()()

Primitive 2: (())
Remove outermost -> ()

Output: "()()()"

Key Observations
The string is always valid.
It may contain multiple primitive strings.
A primitive is the smallest valid parentheses string that cannot be divided into two valid parts. 
*/

/*
3. Brute Force Idea
Approach

Find each primitive separately.
Remove its first ( and last ).
Join the remaining parts.

This works but requires identifying every primitive first.
*/
