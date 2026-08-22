/*
The Next Smaller Element (NSE) problem asks us to find, for every element, the first element to its right that is smaller than it.

==============================================================================
For solving the previous smaller element start just from LEFT ---> RIGHT
==============================================================================

arr = [4, 8, 5, 2, 25]

Next Smaller: We need to look to the right and find the first smaller element.
4  → 2
8  → 5
5  → 2
2  → -1
25 → -1

Answer = [2, 5, 2, -1, -1] 
*/

// 1. Brute Force
/*
For every element, scan all elements on its right until we find a smaller one.

for every i:
    for every j = i + 1 to n:
        if arr[j] < arr[i]:
            answer[i] = arr[j]
            break
Complexity
Time: O(n²)
Space: O(1) excluding the answer array
*/

// 2. Optimal — Monotonic Stack
// Remove elements from the stack that are greater than or equal to arr[i].
// The remaining stack top is the next smaller element.
// Push arr[i] into the stack.
// TC: O(n) && SC: O(n)

/*
          current
             ↓
       ┌───────────┐
       │ Stack Top │
       └───────────┘
             │
       Is top < current?
          /        \
        YES         NO
         ↓           ↓
      answer       POP
       = top         ↓
                  check again
*/

function nextSmallerElement(arr) {
  const n = arr.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  // Traverse from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Remove elements that cannot be the answer
    // because they are greater than or equal to arr[i].
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    // If stack is not empty, its top is the
    // nearest smaller element on the right.
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Current element can be a candidate
    // for elements on its left.
    stack.push(arr[i]);
  }

  return result;
}

// Test cases
console.log(nextSmallerElement([4, 8, 5, 2, 25]));
// [2, 5, 2, -1, -1]

console.log(nextSmallerElement([13, 7, 6, 12]));
// [7, 6, -1, -1]

console.log(nextSmallerElement([5, 5, 5]));
// [-1, -1, -1]

console.log(nextSmallerElement([1, 2, 3, 4]));
// [-1, -1, -1]
