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

// 2. Optimal Solution
// for first and last occurence but use only single mean for one

// TC: O(log n) & SC: O(1)

function findOccurrence(arr, x) {
  let low = 1;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      ans = mid;
      // for first occurence use this
      high = mid - 1;
      // for last occurence
      // low = mid + 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

console.log(findOccurrence([1, 2, 2, 2, 3, 4], 2));
