/*
Two Pointers

Instead of storing leftMax[] and rightMax[], maintain only:
leftMax
rightMax

left                         right
 ↓                              ↓
[4, 2, 0, 3, 2, 5]

At every step, compare:
height[left] vs height[right]

TC: O(n) && SC: O(1)
*/

function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let totalWater = 0;

  while (left < right) {
    // If the left bar is smaller, the left side is the limiting side.
    if (height[left] <= height[right]) {
      // Update the tallest bar seen from the left
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        // Water trapped at the current left position
        totalWater += leftMax - height[left];
      }

      left++;
    } else {
      // Update the tallest bar seen from the right
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        // Water trapped at the current right position
        totalWater += rightMax - height[right];
      }

      right--;
    }
  }

  return totalWater;
}

console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([3, 1, 3])); // 2
console.log(trap([1, 2, 3, 4])); // 0
console.log(trap([4, 2, 4])); // 4
console.log(trap([1, 0, 1])); // 1
