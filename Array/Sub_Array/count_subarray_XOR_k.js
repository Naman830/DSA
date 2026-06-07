/*
It is similar as count subbaray equal to k 

Given an array and an integer K, count the number of subarrays whose XOR is equal to K.

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

// Complexity
// Time  : O(n²)
// Space : O(1)

function subarraysWithXorKBrute(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let xor = 0;

    for (let j = i; j < arr.length; j++) {
      xor ^= arr[j];

      if (xor === k) {
        count++;
      }
    }
  }

  return count;
}
console.log(subarraysWithXorKBrute([4, 2, 2, 6, 4], 6));

// 2. Optimal Solution (Prefix XOR + HashMap)
// Store frequency of every prefix XOR.

/*
At each index:
prefixXOR ^= arr[i]

Now find:
required = prefixXOR ^ k

If required existed before:
count += frequency(required)
*/

/*
Pseudocode

map = {0 : 1}

prefixXOR = 0
count = 0

for each num

    prefixXOR ^= num

    required = prefixXOR ^ k

    if required exists
        count += map[required]

    map[prefixXOR]++

return count
*/