// You are given a strictly increasing array ‘vec’ and a positive integer 'k'. Find the 'kth' positive integer missing from 'vec'.

/*
Example 1:
Input Format: vec[]={4,7,9,10}, k = 1
Result: 1
Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.
*/

// 1. Brute force

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
console.log(MissingKFinder(vec, k));
