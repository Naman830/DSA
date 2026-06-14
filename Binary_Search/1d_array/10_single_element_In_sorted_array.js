/*
You are given a sorted array where:

Every element appears exactly twice
Except one element, which appears only once

Find that single element.

Example
Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Because:
1 -> twice
2 -> once  ✅
3 -> twice
4 -> twice
8 -> twice
==========================================================
==========================================================
Hidden Observation
Since the array is sorted: 1,1,2,2,3,3,4,4,5
Duplicate elements always sit together.

Notice their indexes:

Index: 0 1 2 3 4 5 6 7 8
Value: 1 1 2 2 3 3 4 4 5

Pairs start at even indexes
(0,1)
(2,3)
(4,5)
(6,7)

This is the key observation.
*/

// 1. Brute Force Solution [Use HashMap.]
/*
Time  : O(n)
Space : O(n)
*/

function singleNonDuplicate(nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (const [num, count] of freq) {
    if (count === 1) {
      return num;
    }
  }
}

// 2. Better Solution (XOR)
/*
Time: O(n);
Space: O(1);
*/
function singleNonDuplicate(nums) {
  let xor = 0;

  for (const num of nums) {
    xor ^= num;
  }

  return xor;
}

// Optimal Solution (Binary Search)
// Check which side follows the correct pairing pattern.
/*
Pseudocode

if n == 1
    return nums[0]

if first element unique
    return nums[0]

if last element unique
    return nums[n-1]

low = 1
high = n-2

while low <= high

    mid = (low + high) / 2

    if nums[mid] != nums[mid-1]
       and nums[mid] != nums[mid+1]
          return nums[mid]

    if (mid is odd and nums[mid] == nums[mid-1])
       OR
       (mid is even and nums[mid] == nums[mid+1])

          low = mid + 1
    else
          high = mid - 1
*/
