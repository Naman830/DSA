/*
Given:
arr1 (sorted)
arr2 (sorted)

After merging:
All smaller elements should be in arr1
All larger elements should be in arr2

Both arrays must remain sorted.
*/

// 1. Better Solution (Two Pointers + Sort Again)

/*
Compare:
last element of arr1
first element of arr2

If:
arr1[left] > arr2[right]

swap them.

After all swaps:
sort arr1
sort arr2
*/

/*
Pseudocode
left = n-1
right = 0

while left >= 0 and right < m

    if arr1[left] > arr2[right]
        swap
        left--
        right++
    else
        break

sort arr1
sort arr2
*/
