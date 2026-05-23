// Input:  [1, 1, 2, 3, 3, 4, 4] // Output: 2
// Here
// 1 appears 2 times
// 3 appears 2 times
// 4 appears 2 times

// Only 2 appears once [We need to find that unique number.]

// Approach 1 — Brute Force
// Count how many times it appears
// If count = 1 → return it

function findSingleNumberBrute(arr) {
  // Traverse every element
  for (let i = 0; i < arr.length; i++) {
    // Count frequency of current element
    let count = 0;

    // Again traverse full array
    for (let j = 0; j < arr.length; j++) {
      // If same element found increase count
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    // If element appears only once return it
    if (count === 1) {
      return arr[i];
    }
  }
}

console.log(findSingleNumberBrute([1, 1, 2, 3, 3]));
