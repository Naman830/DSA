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

// Approach 2: Better Solution Using Sorting
// If we sort the array, consecutive numbers come close to each other.
// Imp point duplicate should be ignored.

/*
Pseudocode

sort nums

maxLength = 1
currentLength = 1

for i from 1 to n - 1:
    if nums[i] == nums[i - 1]:
        skip duplicate

    else if nums[i] == nums[i - 1] + 1:
        currentLength++

    else:
        currentLength = 1

    maxLength = max(maxLength, currentLength)

return maxLength
*/

// TC:(n log n) & SC: O(1)

function longestConsecutive(nums) {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  // Sort numbers in ascending order
  nums.sort((a, b) => a - b);

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    // If duplicate number comes, ignore it
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // If current number is exactly previous + 1
    if (nums[i] === nums[i - 1] + 1) {
      currentLength++;
    } else {
      // Sequence broke, start new sequence
      currentLength = 1;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
