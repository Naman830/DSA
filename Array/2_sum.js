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

// Better/Optimal Solution Using Hash Map
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

// TC: O(n) & SC: O(n)
function twoSumBetter(nums, target) {
  // Map will store number as key and its index as value
  // Example: numberToIndex.set(2, 0)
  const numberToIndex = new Map();

  // Traverse the array one by one
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    // Find the number we need to complete the target sum
    const neededNumber = target - currentNumber;

    // Check if needed number already exists in the map
    if (numberToIndex.has(neededNumber)) {
      // If yes, we found the answer
      // Return index of needed number and current index
      return [numberToIndex.get(neededNumber), i];
    }

    // If needed number is not found,
    // store current number with its index for future use
    numberToIndex.set(currentNumber, i);
  }

  // If no pair is found
  return [];
}

console.log(twoSumBetter([2, 7, 11, 15], 9));

// Slightly Optimal Approach TWO POINTER
// Two Pointer works directly only when array is sorted

// Pseudocode
/*
left = 0
right = nums.length - 1

while left < right:
    sum = nums[left] + nums[right]

    if sum == target:
        return [left, right]

    else if sum < target:
        left++

    else:
        right--

return []
*/

// TC: O(n) & SC: O(1)

function twoSumTwoPointer(nums, target) {
  // Start one pointer from the beginning
  let left = 0;

  // Start another pointer from the end
  let right = nums.length - 1;

  // Continue until both pointers meet
  while (left < right) {
    // Calculate current sum
    const sum = nums[left] + nums[right];

    // If sum is equal to target, answer found
    if (sum === target) {
      return [left, right];
    }

    // If sum is smaller than target,
    // we need a bigger number, so move left pointer forward
    else if (sum < target) {
      left++;
    }

    // If sum is greater than target,
    // we need a smaller number, so move right pointer backward
    else {
      right--;
    }
  }

  // If no pair is found
  return [];
}

console.log(twoSumTwoPointer([2, 7, 11, 15], 9 ));
