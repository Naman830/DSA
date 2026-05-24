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