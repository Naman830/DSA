// This similar question on leetCode is :- 1552. Magnetic Force Between Two Balls

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
// If every two cows must be at least d distance apart, can I place all the cows?
function canPlace(stalls, cows, d) {
  // Place first cow at first stall
  let count = 1;

  // This variable remembers:
  // Where was the last cow placed?
  // Every future stall will be compared against lastPos.
  let lastPlaced = stalls[0];

  // Try placing the remaining cows
  for (let i = 1; i < stalls.length; i++) {
    // If current stall is at least 'd' away from last cow
    if (stalls[i] - lastPlaced >= d) {
      // Place a cow here
      count++;
      lastPlaced = stalls[i];
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

/*
Time Complexity: O(NlogN) + O(N *(max(stalls[])-min(stalls[]))), where N = size of the array, max(stalls[]) = maximum element in stalls[] array, min(stalls[]) = minimum element in stalls[] array.

Space Complexity: O(1)
*/

// 2. Binary Search
/*
Always place the first cow in the first stall.
Always get high as answer
*/

function aggressiveCowsBinarySearch(stalls, cows) {
  // Sort stalls
  stalls.sort((a, b) => a - b);

  // Define search space
  let low = 1;
  let high = stalls[stalls.length - 1] - stalls[0];
  let ans = 0;

  // Binary search
  while (low <= high) {
    // Find mid distance
    let mid = Math.floor((low + high) / 2);

    // If placement possible
    if (canPlace(stalls, cows, mid)) {
      // Store answer
      ans = mid;
      // Try larger distance
      low = mid + 1;
    } else {
      // Try smaller distance
      high = mid - 1;
    }
  }
  // Return result
  return ans;
}

console.log(aggressiveCowsBinarySearch(stalls, cows));

/*
Time Complexity: O(NlogN) + O(N * log(max(stalls[])-min(stalls[])))

, where N = size of the array, max(stalls[]) = maximum element in stalls[] array, min(stalls[]) = minimum element in stalls[] array.

Space Complexity: O(1) 
*/
