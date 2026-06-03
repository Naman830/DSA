/*
Problem: Given an m x n matrix, if an element is 0, set its entire row and column to 0. The operation must be done in-place.

Input:
1 1 1
1 0 1
1 1 1

Output:
1 0 1
0 0 0
1 0 1

Keep in Mind
1. First identify rows/columns that should become zero.
2. Then update the matrix.
*/

// 1. Brute Force Solution
/*
When we find a zero:
Mark its row and column with a special value (say -Infinity)
Later convert all markers to 0
*/

/*
Pseudocode

for each cell
    if cell == 0
        mark row
        mark column

convert all markers to 0
*/