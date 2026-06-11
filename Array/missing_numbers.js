// An array containing numbers from 1 to N
// But ONE number is missing
// Find the missing number.

// BRUTE FORCE APPROACH
// Check every number from 1 to N.

// For each number:

// search entire array
// if not found → that's missing

// TC: O(N × N) & SC: O(1)

function missingNumberBrute(arr, N) {
  // FOR number from 1 to N
  for (let i = 1; i <= N; i++) {
    let found = false;
    // FOR every element in array
    // IF element == number
    // found = true
    // BREAK
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    // IF found == false
    // RETURN number

    if (found === false) {
      return i;
    }
  }
}

console.log(missingNumberBrute([1, 2, 4, 5], 5));

// BETTER SOLUTION — HASHING
// TC: O(N) & SC: O(1)

function missingNumberBetter(arr, N) {
  // Create an array/hash map.
  let hash = new Array(N + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    // Mark which numbers exist.
    hash[arr[i]] = 1;
  }

  for (let i = 1; i <= N; i++) {
    // Then check which number is absent.
    if (hash[i] === 0) {
      // Get answer
      return i;
    }
  }
}

console.log(missingNumberBetter([1, 2, 4, 5], 5));

// There is 2 OPTIMAL APPROACH
// 1st is SUM FORMULA
// TC: O(n) & SC: O(1)

function missingSumOptimal(arr, N) {
  // Natural number sum formula:
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Find sum of actual array
    actualSum += arr[i];
  }
  // get answer
  return expectedSum - actualSum;
}
console.log(missingSumOptimal([1, 2, 4, 5], 5));

// 2nd is XOR METHOD
// Think of XOR like "pair cancellation".
// Same numbers disappear.
// Only missing survives.
// TC: O(n) & SC: O(1)

function missingNumberXOR(arr, N) {
  let xor1 = 0;
  let xor2 = 0;

  // XOR array elements
  // XOR numbers from 1 to N
  for (let i = 0; i < arr.length; i++) {
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1 = xor1 ^ N;
  return xor1 ^ xor2;
}

console.log(missingNumberXOR([1, 2, 4, 5], 5));

// More better solution
function missingNumberXOR2(arr, N) {
  // Store XOR result of both:
  // 1. array elements
  // 2. numbers from 1 to N
  let xor = 0;

  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    /*
        XOR Logic:

        arr[i]     -> actual array values
        (i + 1)    -> numbers from 1 to N

        Same numbers cancel each other because:
        a ^ a = 0

        So all matching numbers disappear.

        Only missing number remains at the end.
        */

    xor = xor ^ arr[i] ^ (i + 1);

    /*
        Example:
        arr = [1,2,4,5]

        Iteration 1:
        xor = 0 ^ 1 ^ 1 = 0

        Iteration 2:
        xor = 0 ^ 2 ^ 2 = 0

        Iteration 3:
        xor = 0 ^ 4 ^ 3 = 7

        Iteration 4:
        xor = 7 ^ 5 ^ 4 = 6
        */
  }

  /*
    Loop only covers:
    1 to N-1

    Because array length is one less
    than total numbers.

    So XOR the last number N separately.
    */

  return xor ^ N;

  /*
    Final Step:
    6 ^ 5 = 3

    Missing number = 3
    */
}

console.log(missingNumber([1, 2, 4, 5], 5));
