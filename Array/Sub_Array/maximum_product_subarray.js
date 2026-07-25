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

// 1. Optimal Approach (Track Maximum & Minimum)
/*
Normally, we only keep the maximum value.
But here negative numbers make things tricky.

Example:
Current Maximum = 5
Multiply by -2
Maximum becomes -10 ❌

Now another negative comes.
-10 × -3 = 30 ✅

That negative maximum suddenly becomes the largest positive.

So we must store:
Maximum product till current index.
Minimum product till current index.

Whenever we see a negative number:
Maximum and minimum swap their roles.
*/

function maxProduct(nums) {
  // Maximum and minimum product ending at current index
  let currentMax = nums[0];
  let currentMin = nums[0];

  // Final answer
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Current element
    const currentNumber = nums[i];

    // Negative number swaps the roles of max and min
    if (currentNumber < 0) {
      [currentMax, currentMin] = [currentMin, currentMax];
    }

    // Either start a new subarray or extend the previous one
    currentMax = Math.max(currentNumber, currentMax * currentNumber);
    currentMin = Math.min(currentNumber, currentMin * currentNumber);

    // Update the overall maximum product
    maxProduct = Math.max(maxProduct, currentMax);
  }

  return maxProduct;
}

// Test Cases
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([0, 2])); // 2
console.log(maxProduct([-2])); // -2
