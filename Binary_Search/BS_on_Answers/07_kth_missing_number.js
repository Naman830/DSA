// You are given a strictly increasing array ‘vec’ and a positive integer 'k'. Find the 'kth' positive integer missing from 'vec'.

/*
Example 1:
Input Format: vec[]={4,7,9,10}, k = 1
Result: 1
Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.
*/

// 1. Brute forc
function MissingKFinder(vec, k) {
  for (let i = 0; i < vec.length; i++) {
    if (vec[i] <= k) {
      k++; // Adjust k if current number is not missing
    } else {
      break; // Stop if current number is greater than k
    }
  }
  return k; // k is now the k-th missing number
}

const vec = [4, 7, 9, 10];
const k = 4;

// TC: O(n) & SC: O(1)

// 2. Optimal Solution BINARY SEARCH
/*
formula = low + k (to find missing no.)

low: tells us how many array elements are smaller than the answer.
k: is the number of missing values we want. 
*/

function missingKBinary(vec, k) {
  // Function to return the k-th missing number
  // Start by setting two markers: one at the beginning and one at the end of the list.
  let low = 0;
  let high = vec.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Count how many numbers are missing up to that middle position by subtracting the expected number from the actual number found at that point.

    let missing = vec[mid] - (mid + 1);

    if (missing < k) {
      low = mid + 1; // Move right
    } else {
      high = mid - 1; // Move left
    }
  }

  return k + high + 1; // Compute final result
}

console.log(missingKBinary(vec, k));
