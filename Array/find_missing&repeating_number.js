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

function findMissingRepeatingBrute(arr) {
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

// Approach 2: Better Solution (Hashing)
/*
Store frequency of every number.

Then check:
Frequency = 2 → Repeating
Frequency = 0 → Missing

Pseudocode

freq array of size n+1

for every number
    freq[number]++

for i from 1 to n

    if freq[i] == 0
        missing = i

    if freq[i] == 2
        repeating = i
*/
// TC: O(n) & SC: O(n)

function findMissingRepeatingBetter(arr) {
  const n = arr.length;

  const freq = new Array(n + 1).fill(0);

  for (const num of arr) {
    freq[num]++;
  }

  let missing = -1;
  let repeating = -1;

  for (let i = 1; i <= n; i++) {
    if (freq[i] === 0) missing = i;
    if (freq[i] === 2) repeating = i;
  }

  return [repeating, missing];
}

console.log(findMissingRepeatingBetter([4, 3, 6, 2, 1, 1]));
