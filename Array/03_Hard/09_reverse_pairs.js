/*
Explanation
You are given an array nums.
A reverse pair is a pair of indices (i, j) such that:

i < j
nums[i] > 2 * nums[j]

Return the total number of reverse pairs.
Example
Input: [1,3,2,3,1]

Pairs:
(3,1) → 3 > 2×1 ✅
(3,1) → another 3 > 2×1 ✅

Output: 2

Key Observations (Short)
i must come before j.
Normal nested loops work but are too slow.
We need to compare elements on both sides efficiently.
Merge Sort naturally divides the array into sorted halves, making counting much faster.
*/

// 1. Brute Force
// Check every possible pair (i, j).

/*
Pseudocode
count = 0

for i = 0 to n-1
    for j = i+1 to n-1
        if nums[i] > 2 * nums[j]
            count++

return count
*/

// Time Complexity: O(n²) && Space Complexity: O(n)

// -=====================================================================================
// -=====================================================================================
// -=====================================================================================
// -=====================================================================================

// 2. Optimal Solution (Merge Sort)
/*
Approach:
1. Use Merge Sort.
2. Before merging two sorted halves, count reverse pairs.
3. Merge both halves.

Time Complexity:
Best    : O(n log n)
Average : O(n log n)
Worst   : O(n log n)

Space Complexity:
O(n)
*/

var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(nums, left, right) {
  if (left >= right) return 0;

  const mid = Math.floor((left + right) / 2);

  let count = 0;

  // Count in left half
  count += mergeSort(nums, left, mid);

  // Count in right half
  count += mergeSort(nums, mid + 1, right);

  // Count reverse pairs between both halves
  count += countPairs(nums, left, mid, right);

  // Merge both sorted halves
  merge(nums, left, mid, right);

  return count;
}

// Count reverse pairs before merging
function countPairs(nums, left, mid, right) {
  let count = 0;
  let j = mid + 1;

  for (let i = left; i <= mid; i++) {
    while (j <= right && nums[i] > 2 * nums[j]) {
      j++;
    }

    count += j - (mid + 1);
  }

  return count;
}

// Standard Merge Sort merge
function merge(nums, left, mid, right) {
  const temp = [];

  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }

  while (j <= right) {
    temp.push(nums[j]);
    j++;
  }

  for (let k = left; k <= right; k++) {
    nums[k] = temp[k - left];
  }
}

// Test Cases
console.log(reversePairs([1, 3, 2, 3, 1])); // 2
console.log(reversePairs([2, 4, 3, 5, 1])); // 3
console.log(reversePairs([5, 4, 3, 2, 1])); // 4
console.log(reversePairs([1, 2, 3, 4])); // 0
