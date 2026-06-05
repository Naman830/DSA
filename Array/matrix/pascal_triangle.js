/*
Almost every Pascal Triangle question is secretly based on nCr (Combination Formula).

The key formula is:
nCr = n!/r!(n-r)!
	​
But in interviews, we usually avoid factorials because they are expensive.

First Understand Pascal Triangle
Row 0            1

Row 1          1   1

Row 2        1   2   1

Row 3      1   3   3   1

Row 4    1   4   6   4   1

Row 5  1   5  10  10  5   1

Notice:
Row 4 = 1 4 6 4 1

1  = 4C0
4  = 4C1
6  = 4C2
4  = 4C3
1  = 4C4

So:
Every element in Pascal Triangle = nCr

Interview Pattern
There are 3 standard questions:

Type 1
Given row and column, find the element.

Type 2
Print the nth row.

Type 3
Print the entire triangle.
*/

