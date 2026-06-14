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

==========================================================
==========================================================
2. Intuition

Suppose:
[1,1,2,2,3,4,4,5,5]
Single element = 3

Indexes:
0 1 2 3 4 5 6 7 8
1 1 2 2 3 4 4 5 5

Before the single element:
1 1
2 2

Pairs start at even indexes.
even -> first occurrence
odd  -> second occurrence

After the single element:
4 4
5 5

Pattern changes!
odd  -> first occurrence
even -> second occurrence

Because one element has shifted everything by one position.
Pattern to Remember
Before single element
index: 0 1 2 3
value: 1 1 2 2

nums[even] == nums[even+1]
After single element
index: 5 6 7 8
value: 4 4 5 5

nums[odd] == nums[odd+1]
This change lets us apply Binary Search
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
