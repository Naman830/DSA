/*
Optimal approach — Backtracking

Approach
Sort the array.
Add the current subset to the answer.
Loop from start to the end.
If the current number is the same as the previous number at this level, skip it.
Take the number and recursively continue.
Remove it when returning — this is backtracking.
*/
