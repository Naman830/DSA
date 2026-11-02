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
