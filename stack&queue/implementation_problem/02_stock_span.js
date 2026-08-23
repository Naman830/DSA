/*
For each day's stock price, find how many consecutive days before today had a price ≤ today's price.

Example:
Prices:  [100, 80, 60, 70, 60, 75, 85]
Span:    [  1,  1,  1,  2,  1,  4,  6]

For 75:

60 ≤ 75 ✅
70 ≤ 75 ✅
60 ≤ 75 ✅
80 > 75 ❌ stop

Span = 4

Key observation:-
We need to find the Previous Greater Element (PGE).

i. If PGE exists at index j:            span = i - j
ii. If there is no greater element:     span = i + 1

So Stock Span is basically a Previous Greater Element problem.
*/
