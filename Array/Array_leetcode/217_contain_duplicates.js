/*
LeetCode 217. Contains Duplicate

Brute Force Approach

Return true if any value appears at least twice.
Otherwise return false.
*/

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

// Test Cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1])); // true

/*
| Case    | Time                                   | Space |
| ------- | -------------------------------------- | ----- |
| Best    | **O(1)** (duplicate found immediately) | O(1)  |
| Average | O(n²)                                  | O(1)  |
| Worst   | O(n²)                                  | O(1)  |

*/

/*
LeetCode 217. Contains Duplicate

Optimal Solution

Using Hash Set
*/

function containDuplicatesOptimal(nums) {
  let seen = new Set();

  for (let num of nums) {
    // Already exists?
    if (seen.has(num)) {
      return true;
    }

    // Store it
    seen.add(num);
  }

  return false;
}

// Test Cases
console.log(containDuplicatesOptimal([1, 2, 3, 1])); // true
console.log(containDuplicatesOptimal([1, 2, 3, 4])); // false
console.log(containDuplicatesOptimal([5, 5])); // true
