/*
1. Example:-
nums = [1, 2, 1]

1 → 2 → 1
↑       ↓
└───────┘

Result:-
1 → 2
2 → -1
1 → 2

2. Key observations:-
The array is circular.
Every element can potentially look at elements after the last index.
If no greater element exists → return -1.
We can use a monotonic decreasing stack.
To simulate the circular array, we process the array twice.

======================================================================
======================================================================

Formula for circular way checking:- (index + 1) % n

Example:
[1, 2, 1]
       ↑
       index 2
next index = (2 + 1) % 3 = 0
*/

// 1. Brute Force
// For every element, keep moving right and check elements one by one.
