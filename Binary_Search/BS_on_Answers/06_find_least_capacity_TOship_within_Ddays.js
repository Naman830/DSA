// Simple meaning you have to find the least capcity of ship that it can carry weight of the packages within d days

// 1. Brute force

/*
Pseudo

Find the maximum weight in the array (minimum capacity possible).
Calculate the sum of all weights (maximum capacity possible).

For each capacity from max weight to sum:
Simulate shipping: load packages one by one until capacity is reached, then move to next day.
If total days used is ≤ d, return that capacity.
*/

// Function to check how many days needed for given capacity
function daysNeeded(weights, capacity) {
  // Initialize day count to 1
  let days = 1;
  // Current load for the day
  let currentLoad = 0;

  // Iterate over all package weights
  for (let w of weights) {
    // If adding weight exceeds capacity
    if (currentLoad + w > capacity) {
      // Increase day count and reset load
      days++;
      currentLoad = w;
    } else {
      // Otherwise, add weight to current load
      currentLoad += w;
    }
  }
  // Return total days needed
  return days;
}

// Function to find minimum ship capacity to ship in d days
function shipWithinDays(weights, d) {
  // Find maximum weight as minimum capacity
  let left = Math.max(...weights);
  // Find total sum as maximum capacity
  let right = weights.reduce((a, b) => a + b, 0);

  // Iterate from minimum to maximum capacity
  for (let capacity = left; capacity <= right; capacity++) {
    // Calculate days needed for current capacity
    let needed = this.daysNeeded(weights, capacity);
    // If days needed are less than or equal to d, return capacity
    if (needed <= d) {
      return capacity;
    }
  }
  // Should never reach here given constraints
  return right;
}

console.log(daysNeeded([5, 4, 5, 2, 3, 4, 5, 6], 5));
