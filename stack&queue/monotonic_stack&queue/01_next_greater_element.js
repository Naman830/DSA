/*
For every element, find the first element on its right that is greater than it.

Input:
[4, 5, 2, 10, 8]

Output:
[5, 10, 10, -1, -1]

Time:  O(N²)
Space: O(N)
*/

// 1. Brute Force Approach
// For every element, look to its right until you find a greater element.

function nextGreaterElement(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let greater = -1;

    // Search to the right of arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        greater = arr[j];
        break;
      }
    }

    result.push(greater);
  }

  return result;
}

console.log(nextGreaterElement([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]
