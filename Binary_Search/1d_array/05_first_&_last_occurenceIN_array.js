/*
Given a sorted array and a target element x, find:
The first occurrence of x
The last occurrence of x

arr = [1, 2, 2, 2, 3, 4]
x = 2

Output:
First Occurrence = 1
Last Occurrence = 3
*/

// TC: O(n) & SC: O(1)

// 1. Brute Force Solution
// Traverse the entire array.
function firstLastOccurrenceBrute(arr, x) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      if (first === -1) first = i;
      last = i;
    }
  }

  return [first, last];
}

console.log(firstLastOccurrenceBrute([1, 2, 2, 2, 3, 4], 2));
