// Approach 1 — Brute Force Solution
// Sort the array. -------> largest element will be at last index
// TC: O(n log n) and SC: O(1)

function largestElement(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

console.log(largestElement([1, 2, 6, 2, 6, 8, 1, 1, 1]));

// Approach 2 — Better/Optimal Solution
// Why sort entire array? ------> Just keep track of maximum.
// TC: O(n) and SC: O(1)

function largestElement2(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestElement2([1, 1, 1, 5, 6, 9, 0, 22, 20, 1, 1]));




// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Brute Force Approach
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);

  return nums[nums.length - k];
};

console.log(findKthLargest(nums, k));

