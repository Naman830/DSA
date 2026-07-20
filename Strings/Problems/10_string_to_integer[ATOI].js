/*
1. Easy Explanation

Imagine someone gives you a string like:
"   -42"

Your job is to convert it into an integer.

But the string may contain:
Spaces before the number
A + or - sign

Numbers

Extra characters after the number
You must read only the valid part and ignore the rest.

For example
"42"          → 42
"   -42"      → -42
"4193abc"     → 4193
"words123"    → 0

This is exactly what the C/C++ function atoi() does.

Rules
Ignore leading spaces.
Check if the next character is + or -.
Read digits until a non-digit appears.
If no digit is found, return 0.
If the number exceeds the 32-bit signed integer range:
*/

// 1. Optimal Approach
/*
Remove leading spaces, 
determine the sign, 
then build the number digit by digit. 
After each digit, ensure the value stays within the 32-bit signed integer range.
This solution runs in O(n) time and O(1) extra space.
*/
