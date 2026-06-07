/*
It is similar as count subbaray equal to k 

Given an array and an integer K, count the number of subarrays whose XOR is equal to K.


Intuition

currentXOR = prefixXOR

We need:
previousPrefix ^ currentXOR = K

Take XOR with currentXOR on both sides:
previousPrefix = currentXOR ^ K

This is the whole trick.

Observation

If: currentXOR = px
Then we need a previous prefix XOR equal to:
px ^ K

If such prefix XOR occurred before, then a subarray exists.
*/

// 1. Brute Force Solution
// Generate every subarray and calculate XOR.
/*
Pseudocode
count = 0

for i = 0 to n-1

    xor = 0

    for j = i to n-1

        xor ^= arr[j]

        if xor == k
            count++

return count
*/
