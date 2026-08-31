/*
You are given two integers:

k → how many numbers you must choose
n → target sum

Choose exactly k distinct numbers from 1 to 9 such that their sum is exactly n.

Example:
Input: k = 3, n = 7

Output:
[[1,2,4]]

Because:
1 + 2 + 4 = 7
*/

/*
2. Key observations

The important conditions are:

Numbers can only be 1 → 9.
We need exactly k numbers.
Numbers must be distinct.
Order does not matter:
[1,2,4] and [4,2,1] are the same combination.
Therefore, we should move forward using a start index.

The biggest idea:
Pick a number → recurse → backtrack → move to the next number.
*/
