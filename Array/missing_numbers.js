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
    //    FOR every element in array
    //  IF element == number
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
