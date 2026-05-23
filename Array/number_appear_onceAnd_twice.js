// Input:  [1, 1, 2, 3, 3, 4, 4] // Output: 2
// Here
// 1 appears 2 times
// 3 appears 2 times
// 4 appears 2 times

// Only 2 appears once [We need to find that unique number.]

// Approach 1 — Brute Force
// Count how many times it appears
// If count = 1 → return it
// TC: O(N²) & SC: O(1)

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

// Approach 2 — Better Solution Using Hashing
// Store frequency of every number in hashmap.
// TC: O(n) and SC: O(N)

// In other languages what if number is too big so we use MAP
// if we use ordered map TC: n log n [it use when elements are too complicates] and Unordermap TC: O(n) [it is fastest but if element are too complex we can use orderd map] TC: O(n/2 + 1)

function findSingleNumberBetter(arr) {
  // Create hashmap to store frequencies
  let freq = {};

  // Count frequency of each number
  for (let i = 0; i < arr.length; i++) {
    // If already exists increase count
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    }
    // Else create new entry
    else {
      freq[arr[i]] = 1;
    }
  }

  // Traverse hashmap
  for (let key in freq) {
    // Find element with frequency 1
    if (freq[key] === 1) {
      // key comes as string so convert to number
      return Number(key);
    }
  }
}

console.log(findSingleNumberBetter([1, 1, 2, 3, 3]));
