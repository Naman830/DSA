// You need to find the length of the longest sequence of numbers that come one after another.
// Consecutive means numbers are continuous.

// Approach 1: Brute Forces
/*
For every number, check:

num
num + 1
num + 2
num + 3
...

until the next number is not present in the array.
*/ /*
Pseudocode

maxLength = 0

for each num in nums:
    currentNum = num
    currentLength = 1

    while currentNum + 1 exists in nums:
        currentNum++
        currentLength++

    maxLength = max(maxLength, currentLength)

return maxLength
*/

// TC: O(n^2) & SC: O(1)

function longestConsecutive(nums) {
  let maxLength = 0;

  // Check each number as starting point
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let currentLength = 1;

    // Keep checking next consecutive number
    while (nums.includes(currentNum + 1)) {
      currentNum++;
      currentLength++;
    }

    // Store maximum sequence length
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
