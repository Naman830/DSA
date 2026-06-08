/*
You are given an array of size n containing numbers from 1 to n.

One number appears twice (Repeating Number).
One number is missing.

Input: [4, 3, 6, 2, 1, 1]
Numbers should be: 1, 2, 3, 4, 5, 6

Repeating = 1
Missing = 5
*/

// Approach 1: Brute Force
/*
For every number from 1 to n:

Count how many times it appears.
Count = 0 → Missing
Count = 2 → Repeating
*/

/*
Pseudocode

for num from 1 to n

    count frequency of num

    if count == 0
        missing = num

    if count == 2
        repeating = num

return [repeating, missing]
*/

// TC: O(n²) & SC: O(1)

function findMissingRepeating(arr) {
  const n = arr.length;

  let missing = -1;
  let repeating = -1;

  for (let num = 1; num <= n; num++) {
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] === num) {
        count++;
      }
    }

    if (count === 0) missing = num;
    if (count === 2) repeating = num;
  }

  return [repeating, missing];
}
