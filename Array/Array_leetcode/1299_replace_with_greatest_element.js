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

// 1. Brute Force Approach

function replaceElements(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let max = -1;

    for (let j = i + 1; j < n; j++) {
      max = Math.max(max, arr[j]);
    }

    arr[i] = max;
  }

  return arr;
}

// Test Cases
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// [18, 6, 6, 6, 1, -1]

console.log(replaceElements([400]));
// [-1]
