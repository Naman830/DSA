/*
An inversion is a pair of indices (i, j) such that:

i < j
arr[i] > arr[j]

In simple words:
If a bigger number appears before a smaller number, it forms an inversion.
*/

// 1. Brute Force Solution
// Generate every possible pair.

/*
Loop through every element.
Compare with all elements after it.
If greater, increment count.

Pseudocode

count = 0

for i = 0 to n-1
    for j = i+1 to n-1

        if arr[i] > arr[j]
            count++

return count


*/

