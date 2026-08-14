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

// 2. Optimal Approach — Monotonic Stack
/*
For every element:
1. Remove elements from the stack that are smaller than or equal to the current element.
2. The remaining top element is the Next Greater Element.
3. Push the current element into the stack.

Current
   ↓
[ 4 ] [ 5 ] [ 2 ] [ 10 ] [ 8 ]
                              ↑
                         start here
                              |
                              ↓
                       Monotonic Stack
*/

function nextGreaterElementOptimal(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  // Traverse from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // Remove elements that cannot be the answer
    // because they are smaller than or equal to current.
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack is not empty, its top is the
    // Next Greater Element.
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Current element can be the greater element
    // for elements on its left.
    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterElementOptimal([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]

console.log(nextGreaterElementOptimal([1, 3, 2, 4]));
// [3, 4, 4, -1]

console.log(nextGreaterElementOptimal([5, 4, 3, 2, 1]));
// [-1, -1, -1, -1, -1]

/*
| Case    | Time | Space |
| ------- | ---: | ----: |
| Best    | O(N) |  O(N) |
| Average | O(N) |  O(N) |
| Worst   | O(N) |  O(N) |

*/
