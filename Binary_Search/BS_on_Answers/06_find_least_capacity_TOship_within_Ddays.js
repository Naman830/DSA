// Simple meaning you have to find the least capcity of ship that it can carry weight of the packages within d days

// 1. Brute force

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

const weights = [5, 4, 5, 2, 3, 4, 5, 6];
const d = 5;

console.log(daysNeeded(weights, d));

/*
Time Complexity: O((sum_weights - max_weight) * N), where N is the number of packages.

Space Complexity: O(1), only constant extra space is used.
*/

// 2. Binary Search

function BinarySearchForShip(weight, d) {
  // Calculate minimum capacity as max weight in packages
  let left = Math.max(...weights);
  // Calculate maximum capacity as sum of all weights
  let right = weights.reduce((a, b) => a + b, 0);

  // Binary search between left and right capacity values
  while (left < right) {
    // Calculate mid value to test
    let mid = Math.floor(left + (right - left) / 2);
    // Calculate how many days needed for capacity mid
    let needed = this.daysNeeded(weights, mid);

    // If days needed is less or equal to allowed days,
    // try to find smaller capacity on left side
    if (needed <= d) {
      right = mid;
    } else {
      // Else, need more capacity, search on right side
      left = mid + 1;
    }
  }
  // Return minimum capacity found
  return left;
}

console.log(BinarySearchForShip(weights, d));
