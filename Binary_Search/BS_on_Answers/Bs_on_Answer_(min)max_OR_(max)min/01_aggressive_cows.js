/*
You are given:
An array of stall positions.
k cows.

You must place all cows inside the stalls.

Rule:
The minimum distance between any two cows should be as large as possible.
Easy: Make the smallest distance between every pair of adjacent cows as large as possible.

Return that maximum possible minimum distance.
*/

/*
Think of it like:
You have friends.
Everyone wants personal space.
Arrange them so that the person with the LEAST space gets as much space as possible.

We maximize the minimum distance.
*/

// =============================================================================
// =============================================================================
// =============================================================================

// 1. Brute Force
// The basic idea is to test every possible distance between 1 and the difference between the farthest and nearest stalls.

// Function to check if cows can be placed with min distance d
function canPlace(stalls, cows, d) {
  // Place first cow at first stall
  let count = 1;
  let lastPos = stalls[0];

  // Try placing the remaining cows
  for (let i = 1; i < stalls.length; i++) {
    // If current stall is at least 'd' away from last cow
    if (stalls[i] - lastPos >= d) {
      // Place a cow here
      count++;
      lastPos = stalls[i];
    }
    // If all cows placed successfully
    if (count >= cows) return true;
  }
  // Not possible to place all cows
  return false;
}

function aggressiveCows(stalls, cows) {
  // Step 1: Sort stall positions
  stalls.sort((a, b) => a - b);

  // Step 2: Get the maximum possible distance
  let maxDist = stalls[stalls.length - 1] - stalls[0];

  // Step 3: Variable to store answer
  let ans = 0;

  // Step 4: Try all possible distances
  for (let d = 1; d <= maxDist; d++) {
    // If cows can be placed with distance d
    if (canPlace(stalls, cows, d)) {
      ans = d;
    }
  }
  // Step 5: Return the maximum valid distance
  return ans;
}

let stalls = [1, 2, 8, 4, 9];
let cows = 3;
console.log(aggressiveCows(stalls, cows));
