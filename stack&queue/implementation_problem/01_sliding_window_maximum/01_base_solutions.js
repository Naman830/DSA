/*
You are given an array and a window of size k.
The window moves from left → right. For every window, find the maximum element.

Example:
arr = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3

Windows:
[1,  3, -1] → 3
[3, -1, -3] → 3
[-1,-3,  5] → 5
[-3, 5,  3] → 5
[5,  3,  6] → 6
[3,  6,  7] → 7

Answer = [3, 3, 5, 5, 6, 7]
*/

// ========================================================================================

/*
1. BRUTE FORCE
For every window, simply scan all k elements and find the maximum.
[1, 3, -1] → scan → 3
[3, -1, -3] → scan → 3
...
Complexity
Time: O(n * k)
Space: O(1)

This is too slow when n and k are large.
*/

// ========================================================================================

/*
2. Better Approach — Max Heap
We can use a Max Heap to keep the largest element.

Each time the window moves:

i. Add the new element.
ii. Remove elements outside the window.
iii. Maximum is at the top of heap.

Complexity
Time: O(n log k)
Space: O(k)

Better, but we can do O(n).
*/
