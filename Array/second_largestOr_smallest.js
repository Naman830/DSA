// Second largest does NOT mean: second last element
// It means: the biggest element AFTER the maximum

// Approach 1 — Brute Force
// Sort array ----> // Traverse from back ---> // Find first element smaller than largest
// TC: O(n log n) and SC: O(1)

function secondLargest(arr) {
  arr.sort((a, b) => a - b);

  let largest = arr[arr.length - 1];

  // -2 because we are starting from second last element
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < largest) {
      return arr[i];
    }
  }
  return -1; // if there is no second largest element
}

console.log(secondLargest([4, 7, 1, 9, 2]));
