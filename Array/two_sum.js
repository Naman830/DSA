// You need to find two numbers from the array whose sum is equal to the target.

// Brute Force Approach
// Check every pair.
// For each number, try adding it with every other number.

// PSEUDO CODE
/* 
for i from 0 to nums.length - 1:
    for j from i + 1 to nums.length - 1:
        if nums[i] + nums[j] == target:
            return [i, j]
*/
// WHY: j = i + 1? Because we do not want to use the same number twice.

// TC: O(n2) & SC: O(1)
function twoSumBrute(nums, target) {
  // First loop picks the first number
  for (let i = 0; i < nums.length; i++) {
    // Second loop picks the second number
    // Start from i + 1 because we cannot use the same element twice
    for (let j = i + 1; j < nums.length; j++) {
      // Check if both numbers add up to target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no answer is found
  return [];
}

console.log(twoSumBrute([2, 7, 11, 15], 9));



// Better Solution Using Hash Map
// Instead of checking again and again, we store already seen numbers in a map.

// Pseudocode
/*
create empty map

for i from 0 to nums.length - 1:
    current = nums[i]
    needed = target - current

    if needed exists in map:
        return [map[needed], i]

    store current with index in map
*/