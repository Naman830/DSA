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

// TC = O(n2)
// SC = O(1)

// 2.. Optimal Approach
/*
Instead of repeatedly searching the right side:

Start from the last element.
Keep track of the maximum element seen so far (maxRight).
Before updating maxRight, replace the current element with it.

This avoids scanning the right side multiple times.
*/

function replaceElements(arr) {
  let maxRight = -1;

  // Traverse from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i]; // Store current value

    arr[i] = maxRight; // Replace with greatest on right

    maxRight = Math.max(maxRight, current); // Update max seen so far
  }

  return arr;
}

// Test Cases
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// [18, 6, 6, 6, 1, -1]

console.log(replaceElements([400]));
// [-1]

console.log(replaceElements([10, 9, 8, 7]));
// [9, 8, 7, -1]

// TC: O(n) && SC: O(1)
