/*
Given an array arr and an integer k, count how many subarrays have sum exactly equal to k.

The question is not asking for the maximum sum.

It is asking:
How many continuous ranges have sum exactly equal to k?

Notice the word COUNT.

Whenever you see:
Count
Number of ways
How many
Frequency

Think:
HashMap
Prefix Sum
Frequency Map
*/

// Brute Force Solution
// Generate every possible subarray.
// Calculate its sum.
// If sum equals k, increment count.

/*
Pseudocode
count = 0

for i from 0 to n-1
    sum = 0

    for j from i to n-1
        sum += arr[j]

        if sum == k
            count++

return count
*/