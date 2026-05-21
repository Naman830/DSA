// It means:
// Take all UNIQUE elements from both arrays.

// Arrays are already SORTED. [This is a HUGE clue.]
// Whenever arrays are sorted,

// your brain should think:
// Can I use two pointers? (Usually yes.)

// Brute Force Approach:
// Take all elements into one data structure that automatically removes duplicates. [Set in JavaScript is a good choice for this.]

// Time Complexity: O(n + m) where n and m are the lengths of the two arrays.
// Space Complexity: O(n + m) in the worst case when all elements are unique.

function unionArray(arr1, arr2) {
  let set = new Set();
  //  Insert all elemenets of arr1 into the set.
  for (let num of arr1) {
    set.add(num);
  }
  //  Insert all elemenets of arr2 into the set.
  for (let num of arr2) {
    set.add(num);
  }

  return [...set];
}

console.log(unionArray([1, 2, 3], [2, 3, 4]));
