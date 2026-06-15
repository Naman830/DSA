// A peak element is an element that is greater than its immediate neighbors.
/*
nums = [1, 2, 3, 1]
Peak = 3
Index = 2

OBSERVATION
For boundary elements:
nums[-1] = -∞
nums[n]  = -∞

So: [5,4,3] 
Peak is 5
because:
-∞ < 5 > 4

Similarly: [1,2,3]
Peak is 3
because:
2 < 3 > -∞
*/

// 1. Brute Force Solution (Linear Search)
// Simply check every element.
// If an element is greater than both neighbors, it is a peak.

/*
Pseudocode
for each index i

    left  = nums[i-1] if exists else -∞
    right = nums[i+1] if exists else -∞

    if nums[i] > left AND nums[i] > right
        return i
*/

// TC: BEST CASE: O(1) & O(n) && SC: O(1)

var findPeakElement = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const left = i === 0 ? Number.NEGATIVE_INFINITY : nums[i - 1];

    const right = i === n - 1 ? Number.NEGATIVE_INFINITY : nums[i + 1];

    if (nums[i] > left && nums[i] > right) {
      return i;
    }
  }

  return -1;
};

// 2. Optimal Solution (Binary Search)

/*
Look at:
nums[mid]
nums[mid+1]

Only compare these two.

Situation 1

nums[mid] < nums[mid+1]
1 2 3 4 5
    ^
We are climbing upward.
A peak must exist on the right side.
Move right.
low = mid + 1;


Situation 2
nums[mid] > nums[mid+1]
5 4 3 2 1
    ^
We are moving downward.
Peak exists on left side including mid.
Move left.
high = mid;

Why high = mid?
Because mid itself might be the peak.

Example:
1 5 3
  ^
If we do:
high = mid - 1;
we lose the peak.
*/
