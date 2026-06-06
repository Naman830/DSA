/*
4Sum is an extension of 2Sum and 3Sum.

Problem
Given an array nums and a target value, return all unique quadruplets:

nums = [1,0,-1,0,-2,2]
target = 0

Output:
[
  [-2,-1,1,2],
  [-2,0,0,2],
  [-1,0,0,1]
]
*/

// 1. Brute Force Solution
/*
Time  : O(n⁴)
Space : O(1)

Pseudocode

for i
    for j
        for k
            for l

                if sum == target
                    store answer
*/

// 2. Optimal Solution (Sorting + Two Pointers)
/*
Steps
Sort array.
Fix first element using i.
Fix second element using j.
Use left and right pointers.
If sum matches target:
Save quadruplet.
Skip duplicates.
Move pointers accordingly.
*/