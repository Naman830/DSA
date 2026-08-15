// Problem:
// Given an array height where height[i] represents the height of a bar,
// calculate how much rainwater can be trapped after raining.
// Time: O(n²) && Space: O(1)

function trap(height) {
  let totalWater = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // Find the maximum height on the left side
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    // Find the maximum height on the right side
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    // Water level is limited by the smaller boundary
    const waterLevel = Math.min(leftMax, rightMax);

    // Add water above the current bar
    totalWater += waterLevel - height[i];
  }

  return totalWater;
}

console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([3, 1, 3])); // 2
console.log(trap([1, 2, 3, 4])); // 0
