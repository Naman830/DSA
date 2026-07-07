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
*/
