/*
4Sum is an extension of 2Sum and 3Sum.

Problem
Given an array nums and a target value, return all unique quadruplets:

nums = [1,0,-1,0,-2,2]
target = 0

Output:
[
  [-2,-1,1,2],
  [-2,0,0,2],
  [-1,0,0,1]
]
*/

// 1. Brute Force Solution
/*
Time  : O(n⁴)
Space : O(1)

Pseudocode

for i
    for j
        for k
            for l

                if sum == target
                    store answer
*/

// 2. Optimal Solution (Sorting + Two Pointers)
/*
Steps
Sort array.
Fix first element using i.
Fix second element using j.
Use left and right pointers.
If sum matches target:
Save quadruplet.
Skip duplicates.
Move pointers accordingly.
*/

/*
Pseudocode

sort array

for i
    skip duplicate i
    for j
        skip duplicate j

        left = j + 1
        right = n - 1

        while left < right
            sum = nums[i] + nums[j] + nums[left] + nums[right]

            if sum == target
                add answer
                skip duplicates
                left++
                right--

            else if sum < target
                left++

            else
                right--
*/

function fourSum(nums, target) {
  // Sort array for two-pointer technique
  nums.sort((a, b) => a - b);

  const result = [];

  // Select first number
  for (let i = 0; i < nums.length - 3; i++) {
    // Skip duplicate first numbers
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Select second number
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip duplicate second numbers
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // Two pointers for remaining two numbers
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        // Found valid quadruplet
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // Skip duplicate third numbers
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          // Skip duplicate fourth numbers
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        }

        // Need larger sum
        else if (sum < target) {
          left++;
        }

        // Need smaller sum
        else {
          right--;
        }
      }
    }
  }

  return result;
}

// Example
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
