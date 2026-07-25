/*
Your task is to find the contiguous subarray (elements next to each other) that has the maximum product, and return that product.

Example
Input: [2,3,-2,4]

Possible Products:
[2] = 2
[2,3] = 6 ✅
[2,3,-2] = -12
[3,-2,4] = -24
[4] = 4

Output:
6

Key Observations (Short)
Product changes differently than sum.
A negative × negative = positive.
A zero breaks the product, so we start again after zero.
At every index we need:
Maximum product ending here.
Minimum product ending here (because it may become maximum after multiplying by a negative).
*/
