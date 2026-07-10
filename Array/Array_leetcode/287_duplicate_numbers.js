/*
You are given an array nums containing n + 1 integers.

Every number is between 1 and n (inclusive).
There is only one duplicate number.
That duplicate number may appear more than twice.

Your task is to return the duplicate number without modifying the array.
*/

// 1. Brute Force Approach
// For every element, count how many times it appears.
// If any count becomes greater than 1, return that element.

/*
Time : O(n²)
Space : O(1)
*/

function findDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > 1) {
      return nums[i];
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// 2. Better Approach (Hash Set)
// Keep inserting numbers into a Set.
// Before inserting, check if it already exists.
// If yes, that's the duplicate.

/*
Time : O(n)
Space : O(n)
*/

function findDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
