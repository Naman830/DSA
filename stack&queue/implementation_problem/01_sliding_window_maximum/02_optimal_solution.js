/*
Optimal — Monotonic Deque

1. We don't want to search all k elements again.
2. Use a Monotonic Decreasing Deque.
3. The deque stores indices, and their values are always decreasing:    
10 → 8 → 5 → 2
The front always contains the maximum.
*/
