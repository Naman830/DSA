/*
Instead of creating two extra arrays, use the first row and first column of the matrix as marker arrays.

First row stores which columns should become zero.
First column stores which rows should become zero.

Since matrix[0][0] belongs to both the first row and first column, use an extra variable (firstColumnHasZero) to remember whether the first column needs to be zeroed.
*/

/*
| Case    | Time   | Space |
| ------- | ------ | ----- |
| Best    | O(M×N) | O(1)  |
| Average | O(M×N) | O(1)  |
| Worst   | O(M×N) | O(1)  |

*/
