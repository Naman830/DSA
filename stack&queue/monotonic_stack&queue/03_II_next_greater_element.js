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
*/
