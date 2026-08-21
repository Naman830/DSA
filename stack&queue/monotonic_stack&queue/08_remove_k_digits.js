/*
You are given a number as a string and an integer k.
You must remove exactly k digits so that the remaining number is as small as possible.

Example:
num = "1432219"
k = 3

Remove 4, 3, and 2:
1432219
 ↓↓↓
1219

Answer: 1219
*/

/*
1. Brute Force
Try every possible way of removing k digits and choose the smallest result.
Problem: the number of possibilities becomes huge.

Time: roughly O(2^n)
Space: O(n)
*/

/*
2. Optimal Approach — Monotonic Stack

i. Given a string num representing a non-negative integer and an integer k,
ii. remove exactly k digits from num so that the resulting number is the smallest possible.
iii. Return the resulting number as a string.
*/
