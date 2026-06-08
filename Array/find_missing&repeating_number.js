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

// Approach 3: THERE ARE TWO APPROACHES WITH MATHEMATICS AND XOR METHOD IN INTERVIEW DON'T TELL XOR METHOD BECAUSE IT IS TOO COMPLICATED AND TAKE YOUR LOT OF TIME SO THAT SHOW ONLY MATHEMATICS METHOD

// Approach 3: Mathematical Solution
/*

Let
x = Repeating Number
y = Missing Number

Expected Sum
1+2+3+⋯+n= n(n+1) / 2

Let:
actualSum = array sum
expectedSum = n(n+1)/2

Then:
actualSum - expectedSum 
= x - y

Let:
x - y = S [it become our first equation that we use in future]

Sum of Squares 
Expected:
1² + 2² + ... + n²

Formula: n(n+1)(2n+1)/6

Now:
actualSquareSum - expectedSquareSum

= x² - y²

Using:
x² - y² = (x-y)(x+y) [now we have our 2nd equation]

Therefore:
x + y = P

Now we have:
x - y = S
x + y = P

Solve:
x = (S + P)/2
y = P - x
*/

/*
Pseudocode

find actual sum
find actual square sum

S = actualSum - expectedSum

squareDiff = actualSquareSum - expectedSquareSum

P = squareDiff / S
repeating = (S + P)/2

missing = P - repeating
*/

// TC: O(n) & SC: O(1)

function findMissingRepeatingMath(arr) {
  const n = arr.length;

  let actualSum = 0;
  let actualSquareSum = 0;

  // Calculate:
  // 1. Sum of all array elements
  // 2. Sum of squares of all array elements
  for (const num of arr) {
    actualSum += num;
    actualSquareSum += num * num;
  }

  // Expected sum of numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Expected sum of squares from 1 to n
  const expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

  // S = repeating - missing
  const S = actualSum - expectedSum;

  // squareDiff = repeating² - missing²
  const squareDiff = actualSquareSum - expectedSquareSum;

  // P = repeating + missing
  // Because:
  // repeating² - missing²
  // = (repeating - missing)(repeating + missing)
  const P = squareDiff / S;

  // Solve the equations:
  // repeating - missing = S
  // repeating + missing = P
  const repeating = (S + P) / 2;

  // missing = P - repeating
  const missing = P - repeating;

  return [repeating, missing];
}

console.log(findMissingRepeatingMath([4, 3, 6, 2, 1, 1]));
