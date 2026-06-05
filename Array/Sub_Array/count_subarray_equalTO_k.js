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

// TC: O(n2) & SC: O(1)

function countSubarraysBrute(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    // Always start from i not from 0
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSubarraysBrute([1, 2, 3, -3, 3, 1, 1, 1, 4, 2, -3, 3], 3));

// Optimal Solution (Prefix Sum + HashMap)
// formula: currentPrefix - previousPrefix = k

/*
Pseudocode
map = {0:1}

prefix = 0
count = 0

for num in arr

    prefix += num

    if map contains (prefix-k)
        count += map[prefix-k]

    map[prefix]++

return count
*/