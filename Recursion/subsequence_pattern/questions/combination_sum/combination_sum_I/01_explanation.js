/*
1. You are given an array candidates and a target.
2. You need to find all combinations whose sum equals target.
3. Important: you can use the same number multiple times.

Example:-
candidates = [2, 3, 6, 7]
target = 7

Possible combinations:
2 + 2 + 3 = 7
7 = 7

So:
[[2,2,3], [7]]

2. Key observations
Same element can be picked multiple times.

Order does NOT matter.
[2,3,2] == [2,2,3]

We only want one of them.

If sum === target → we found an answer.
If sum > target → stop exploring that path.

The most important idea is:
After picking a number, we stay at the same index because we are allowed to pick it again.
*/

//==============================================================================================
// Brute Force =====> generate all possible combination =====> TC: O(c x k) && SC: O(c x k)
//==============================================================================================
