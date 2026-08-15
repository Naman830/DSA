/*
1. Example:-
nums = [1, 2, 1]

1 → 2 → 1
↑       ↓
└───────┘

Result:-
1 → 2
2 → -1
1 → 2

2. Key observations:-
The array is circular.
Every element can potentially look at elements after the last index.
If no greater element exists → return -1.
We can use a monotonic decreasing stack.
To simulate the circular array, we process the array twice.

======================================================================
======================================================================

Formula for circular way checking:- (index + 1) % n

Example:
[1, 2, 1]
       ↑
       index 2
next index = (2 + 1) % 3 = 0
*/

// 1. Brute Force
// For every element, keep moving right and check elements one by one.
/*
Time: O(n²)
Space: O(1) excluding result
*/

// 2. Better / Optimal Approach: Monotonic Stack
// Instead of actually creating: [1, 2, 1, 1, 2, 1]
// we simply loop from: 2n - 1 → 0 [i % n]
// TC: O(n) && SC: O(n)

function nextGreaterElements(nums) {
  const n = nums.length;

  // Result initially contains -1 for every element.
  const result = new Array(n).fill(-1);

  // Monotonic decreasing stack.
  const stack = [];

  // Traverse the array twice to simulate circular behavior.
  for (let i = 2 * n - 1; i >= 0; i--) {
    const current = nums[i % n];

    // Remove elements that cannot be the next greater element.
    while (stack.length > 0 && stack[stack.length - 1] <= current) {
      stack.pop();
    }

    // Only fill the result during the first pass.
    if (i < n && stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Current element can be a greater element for future elements.
    stack.push(current);
  }

  return result;
}

// Test cases
console.log(nextGreaterElements([1, 2, 1]));
// [2, -1, 2]

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
// [2, 3, 4, -1, 4]

console.log(nextGreaterElements([5, 4, 3, 2, 1]));
// [-1, 5, 5, 5, 5]

console.log(nextGreaterElements([1, 1, 1]));
// [-1, -1, -1]
