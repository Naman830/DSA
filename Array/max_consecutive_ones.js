// Given a binary array (only 0 and 1),
// find the maximum number of consecutive 1s.

// OPTIMAL APPROACH BECAUSE IT IS STRAIGT FORWARD

// REAL LIFE ANALOGY

// Imagine counting:
// How many days in a row did you go gym?
// Every gym day (1):

// streak increases
// Missed day (0):

// streak resets

// You keep remembering:
// best streak ever
// That is EXACTLY this problem.

// TC: 0(n) & SC: O(1)

function maxConsecutiveOnes(arr) {
  let count = 0;
  let maxCount = 0;
  // We traverse array once.
  for (let i = 0; i < arr.length; i++) {
    // current streak of ones
    if (arr[i] === 1) {
      count++;
      // maximum streak found so far
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));
