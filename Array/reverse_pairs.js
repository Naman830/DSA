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
Just like Count Inversions, we use Merge Sort.
When Merge Sort divides the array:

Left Half  -> sorted
Right Half -> sorted

Before merging them, we count reverse pairs.

Because both halves are sorted:
We don't restart checking every time.
A pointer only moves forward.
Total counting becomes linear for each merge.

Overall:
Divide
→ Count reverse pairs
→ Merge
*/
