/*
Input
arr = [17, 18, 5, 4, 6, 1]

Think about each position separately.

| Current Element | Elements on Right | Greatest on Right | New Value |
| --------------- | ----------------- | ----------------- | --------- |
| 17              | 18, 5, 4, 6, 1    | 18                | 18        |
| 18              | 5, 4, 6, 1        | 6                 | 6         |
| 5               | 4, 6, 1           | 6                 | 6         |
| 4               | 6, 1              | 6                 | 6         |
| 6               | 1                 | 1                 | 1         |
| 1               | —                 | -1                | -1        |

Output
[18, 6, 6, 6, 1, -1]

Every element depends only on the elements to its right.
Ignore all elements on the left.
The last element will always become -1.
The array size does not change.
Only the values are replaced.
*/
