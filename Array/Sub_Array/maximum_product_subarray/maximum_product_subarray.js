/*
Your task is to find the contiguous subarray (elements next to each other) that has the maximum product, and return that product.

Example
Input: [2,3,-2,4]

Possible Products:
[2] = 2
[2,3] = 6 ✅
[2,3,-2] = -12
[3,-2,4] = -24
[4] = 4

Output:
6

Key Observations (Short)
Product changes differently than sum.
A negative × negative = positive.
A zero breaks the product, so we start again after zero.
At every index we need:
Maximum product ending here.
Minimum product ending here (because it may become maximum after multiplying by a negative).
*/

// 1. Brute Force
// Generate every possible subarray.
// Calculate its product.
// Keep updating the maximum product found.

function maxProductBrute(nums) {
  let maxProduct = -Infinity;

  for (let start = 0; start < nums.length; start++) {
    let product = 1;

    for (let end = start; end < nums.length; end++) {
      product *= nums[end];
      maxProduct = Math.max(maxProduct, product);
    }
  }

  return maxProduct;
}

// Test Cases
console.log(maxProductBrute([2, 3, -2, 4])); // 6
console.log(maxProductBrute([-2, 0, -1])); // 0
console.log(maxProductBrute([-2, 3, -4])); // 24

// TC: O(n²) & SC: O(1)
