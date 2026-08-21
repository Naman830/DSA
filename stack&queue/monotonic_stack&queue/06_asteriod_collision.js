/*
You are given an array of asteroids.

Positive number → asteroid moving right ➡️
Negative number → asteroid moving left ⬅️

The absolute value represents its size.

Key observations:-
stack top  ➡️    ⬅️ current
Only then can they collide.

| Stack top | Current | Result         |
| --------- | ------- | -------------- |
| `5`       | `-3`    | `5` survives   |
| `3`       | `-5`    | `-5` survives  |
| `5`       | `-5`    | Both destroyed |
| `-5`      | `3`     | No collision   |
| `5`       | `3`     | No collision   |
*/

// 1. Brute Force
// The problem is that after every collision, we may need to scan the array again.
// Time:  O(n²) && Space: O(n)

// 2. Optimal Approach — Monotonic Stack
/*
For every asteroid:-

1. If there is no possible collision, simply push it.
2. If there is a collision compare their sizes.
*/
