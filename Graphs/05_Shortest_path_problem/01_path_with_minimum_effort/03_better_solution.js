/*
Instead of directly finding the minimum effort, we check whether a particular effort is sufficient to reach the destination.

For example:
Can we reach destination with maximum effort 1? NO

Can we reach destination with maximum effort 2? YES

Can we reach destination with maximum effort 3? YES

Can we reach destination with maximum effort 4? YES


Notice something?

If we can reach the destination with effort 2, we can also reach it with effort 3, 4, and so on.
This is a monotonic property, which allows us to apply Binary Search.


Algorithm
1. Initialize low = 0.
2. Find the maximum adjacent height difference and store it in high.
3. Calculate mid = Math.floor((low + high) / 2).
4. Run BFS to check whether the destination is reachable with maximum allowed effort mid.
5. During BFS, only visit a neighboring cell if its height difference is <= mid.
6. If the destination is reachable, search for a smaller effort: high = mid.
7. Otherwise, search for a larger effort: low = mid + 1.
8. Return low.
*/
