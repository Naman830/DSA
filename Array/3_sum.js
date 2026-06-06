/*
Given an array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that:

i != j
j != k
i != k

[nums[i] + nums[j] + nums[k] = 0]

Find all combinations of 3 numbers whose sum equals 0.
1. Not indices.
2. Not count.
3. Actual triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: 
[-1,0,1]
[0,-1,1]
[1,-1,0]

are all considered the same triplet.

We only return one.

This problem is: Sorting + Two Pointers
*/

// 1. Brute Force Solution
// Try every triplet.
// If sum = 0
// Store it.
// Use a Set to remove duplicates.

/*
Pseudocode

for i
    for j
        for k

            if sum == 0
                store triplet
*/

// Time: O(n³) & Space: O(number of triplets)

function threeSumBrute(nums) {
  // Set is used to avoid duplicate triplets
  const set = new Set();

  // Result array
  const result = [];

  // Pick first number
  for (let i = 0; i < nums.length; i++) {
    // Pick second number
    for (let j = i + 1; j < nums.length; j++) {
      // Pick third number
      for (let k = j + 1; k < nums.length; k++) {
        // Calculate current sum
        const sum = nums[i] + nums[j] + nums[k];

        // If triplet sum becomes zero
        if (sum === 0) {
          // Sort triplet so duplicates look identical
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

          // Convert array to string
          const key = triplet.join(",");

          // If not already stored
          if (!set.has(key)) {
            set.add(key);
            result.push(triplet);
          }
        }
      }
    }
  }

  return result;
}

console.log(threeSumBrute([-1, 0, 1, 2, -1, -4]));

// 2. Better Solution
/*
Idea
Fix one element.

Then solve remaining as Two Sum using HashSet.

For every i:
target = -nums[i]

Find: nums[j] + nums[k] = target

using HashSet.

Complexity
Time  = O(n²)
Space = O(n)

Good but still duplicate handling becomes messy.
*/

// 3. Optimal Solution
/*
Step 1: Sort Array
Duplicates become adjacent
Two pointers become possible

Step 2: Fix One Number

Step 3: Use Two Pointers
left = i + 1
right = n - 1

Found triplet.
Store it.
Move both pointers.
*/

// TC: O(n) & SC: O(1)

function threeSum(nums) {
  // Final answer array
  const result = [];

  // Sort array in ascending order
  nums.sort((a, b) => a - b);

  // Fix first element of triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // -----------------------------------------
    // Skip duplicate first elements
    // Example:
    // [-1, -1, 0, 1]
    //
    // If current -1 is same as previous -1
    // we already processed it
    // -----------------------------------------
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Two pointers
    let left = i + 1;
    let right = nums.length - 1;

    // Search pair for current fixed element
    while (left < right) {
      // Current triplet sum
      const sum = nums[i] + nums[left] + nums[right];

      // ----------------------------------
      // Sum too small
      // Need larger number
      // ----------------------------------
      if (sum < 0) {
        left++;
      }

      // ----------------------------------
      // Sum too large
      // Need smaller number
      // ----------------------------------
      else if (sum > 0) {
        right--;
      }

      // ----------------------------------
      // Found valid triplet
      // ----------------------------------
      else {
        result.push([nums[i], nums[left], nums[right]]);

        // Move both pointers
        left++;
        right--;

        // ----------------------------------
        // Skip duplicate values on left
        // Example:
        // [-1,0,0,0,1]
        // ----------------------------------
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // ----------------------------------
        // Skip duplicate values on right
        // ----------------------------------
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
