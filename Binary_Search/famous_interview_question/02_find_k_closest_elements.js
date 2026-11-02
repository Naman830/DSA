/*
Understand the question

You are given:
- A sorted array.
- An integer K.
- An integer X.

You need to return exactly K elements closest to X.

Example:
arr = [1, 2, 3, 4, 5];
k = 4;
x = 3;

Possible windows:
- [1, 2, 3, 4] → distances: 2, 1, 0, 1
- [2, 3, 4, 5] → distances: 1, 0, 1, 2

Both have the same total distance. We choose the smaller elements when there's a tie.

Answer:
[1, 2, 3, 4]
*/

/*
Key observations
- The array is already sorted.
- We need exactly k consecutive elements in the sorted array.
- Instead of checking every possible combination, we can binary search for the starting index of our answer.
- Our possible starting indices range from 0 to n - k.
- Compare the two elements just outside the current window to decide which direction to move.
*/
