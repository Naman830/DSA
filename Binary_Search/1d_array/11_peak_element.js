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
