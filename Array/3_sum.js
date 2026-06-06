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

*/