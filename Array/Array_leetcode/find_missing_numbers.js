// 268. Missing Number
// Duplicate XOR values destroy each other.
// Only missing value survives.

var missingNumber = function(nums) {
      let xor = nums.length;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }

    return xor;
};

// Why Start with nums.length?
// Because we need numbers from:
// 0 → n

// Loop only gives:
// 0 → n-1

// So we initially store n.

// Example:
// nums.length = 3
// Then loop adds:
// 0,1,2

// Together:
// 0,1,2,3
// Complete range covered.