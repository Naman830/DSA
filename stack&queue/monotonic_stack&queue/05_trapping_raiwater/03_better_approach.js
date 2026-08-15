/*
Prefix & Suffix Maximum
Instead of finding the left and right maximum again and again, we can precalculate them.

height:
[4, 2, 0, 3, 2, 5]

leftMax:
[4, 4, 4, 4, 4, 5]

rightMax:
[5, 5, 5, 5, 5, 5]

So we can directly calculate:
water[i] = min(leftMax[i], rightMax[i]) - height[i]
*/

function trap(height) {
  const n = height.length;

  if (n === 0) return 0;

  const leftMax = new Array(n);
  const rightMax = new Array(n);

  // Build leftMax array
  // leftMax[i] = tallest bar from index 0 to i
  leftMax[0] = height[0];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Build rightMax array
  // rightMax[i] = tallest bar from index i to n - 1
  rightMax[n - 1] = height[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let totalWater = 0;

  // Calculate trapped water at every index
  for (let i = 0; i < n; i++) {
    const waterLevel = Math.min(leftMax[i], rightMax[i]);

    totalWater += waterLevel - height[i];
  }

  return totalWater;
}

console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([3, 1, 3])); // 2
console.log(trap([1, 2, 3, 4])); // 0
