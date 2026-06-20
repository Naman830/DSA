/*
Koko has some piles of bananas.

piles = [3,6,7,11]
h = 8

Koko can choose an eating speed k bananas/hour.

Rules:
Every hour she picks one pile.
She eats at most k bananas from that pile.
If the pile has fewer than k, she eats the whole pile.
After eating, if bananas remain in that pile, she'll continue it in future hours.

We need to find:
The minimum eating speed k so that Koko finishes all bananas within h hours.

In simple we have to find minimum time in that koko can it whole banans and for that search we find our maxxium banana limit so that we can find our answer between the number
*/

/*
1. Brute force approach is simple try every possible number and when number find return the value

Pseudo code
for speed from 1 to maxPile

    calculate hours

    if hours <= h
        return speed
*/

// 2. Optimal Solution

/*
TC = O(checkFunction × log(searchSpace))
Tc: O(n × log(maxPile)) & sc: O(1)
*/

function minEatingSpeed(piles, h) {
  // Minimum possible speed is 1 banana/hour
  let low = 1;

  // Maximum possible speed is the largest pile
  let high = Math.max(...piles);

  // Store the minimum valid speed found so far
  let ans = high;

  // Binary Search on eating speed
  while (low <= high) {
    // Find middle speed
    let mid = Math.floor((low + high) / 2);

    // Total hours needed if Koko eats at speed = mid
    let hours = 0;

    // Calculate hours required for all piles
    for (let pile of piles) {
      // Hours needed for current pile
      // Example: pile = 11, speed = 4
      // Math.ceil(11 / 4) = 3 hours
      hours += Math.ceil(pile / mid);
    }

    // If Koko can finish within h hours
    if (hours <= h) {
      // Current speed works, save it
      ans = mid;

      // Try to find an even smaller valid speed
      high = mid - 1;
    } else {
      // Current speed is too slow
      // Need to increase eating speed
      low = mid + 1;
    }
  }

  // Return minimum valid speed
  return ans;
}

let piles = [3, 6, 7, 11];
let h = 4;
console.log(minEatingSpeed(piles, h));
