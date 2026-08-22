/*
1. Brute Force

For every bar:
i. Take its height.
ii. Expand left until you find a smaller bar.
iii. Expand right until you find a smaller bar.
iv. Calculate the area.

This checks many bars repeatedly.
Time: O(n²)
Space: O(1)
*/

/*
2. Better Approach

For every bar, separately calculate:
i. Previous Smaller Element
ii. Next Smaller Element

Then:
width = nextSmaller - previousSmaller - 1
area = height × width

This takes O(n) space and O(n) time.
*/

// 3. Optimal Approach [Intution is written in problem understanding.js]

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

  // Add 0 to force processing of remaining bars
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    // Current bar is smaller than stack top
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const height = heights[stack.pop()];

      // If stack is empty, rectangle starts from index 0
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

      const area = height * width;

      maxArea = Math.max(maxArea, area);
    }

    stack.push(i);
  }

  // Remove the added 0
  heights.pop();

  return maxArea;
}

// Test cases
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// 10

console.log(largestRectangleArea([2, 4]));
// 4

console.log(largestRectangleArea([2, 2, 2]));
// 6

console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6]));
// 12
