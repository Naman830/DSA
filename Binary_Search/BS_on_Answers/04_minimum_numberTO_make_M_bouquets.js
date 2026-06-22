/*
You are given:
bloomDay[i] = day on which the ith flower blooms.
m = number of bouquets needed.
k = flowers required for one bouquet.
Rule

A bouquet can only be made using k adjacent flowers.

Goal

Find the minimum number of days needed to make exactly m bouquets.

If impossible, return -1.


OBSERVATIONNNNNNNNNNNNNNNNNNN
Suppose day = 3

Flowers bloomed:
[1,10,3,10,2]
↓
[Bloomed, Not, Bloomed, Not, Bloomed]
Can make 3 bouquets.

Suppose day = 10
Now all flowers bloom.
Can definitely make 3 bouquets.
*/

// 1. Brute Force Solution
/*
Time = O(maxDay × n)
Space = O(1)
*/

function minDays(bloomDay, m, k) {
  // Find the maximum bloom day
  let maxDay = Math.max(...bloomDay);

  // Try every day from 1 to maxDay
  for (let day = 1; day <= maxDay; day++) {
    // If we can make m bouquets on this day,
    // this is the minimum valid day
    if (canMakeBouquets(day, bloomDay, m, k)) {
      return day;
    }
  }

  // If no day can form m bouquets
  return -1;
}

function canMakeBouquets(day, bloomDay, m, k) {
  // Count consecutive bloomed flowers
  let flowers = 0;

  // Count total bouquets formed
  let bouquets = 0;

  // Traverse all flowers
  for (let i = 0; i < bloomDay.length; i++) {
    // Flower has bloomed by the given day
    if (bloomDay[i] <= day) {
      flowers++;

      // If we collected k adjacent flowers,
      // form one bouquet
      if (flowers === k) {
        bouquets++;

        // Reset for next bouquet
        flowers = 0;
      }
    } else {
      // Broken adjacency, reset count
      flowers = 0;
    }
  }

  // Return true if at least m bouquets can be made
  return bouquets >= m;
}

// 2. Optimal Solution (Binary Search on Answer)

/*
Search Space:
[min(bloomDay), max(bloomDay)]

Check(mid):
Can we make at least m bouquets in mid days?

If Yes:
    high = mid - 1   // Search for a smaller answer

If No:
    low = mid + 1    // Need more days

Return low
*/

/*
Time: O(n * log(maxBloomDay))
Space: O(1)
*/

function minDays(bloomDay, m, k) {
  let n = bloomDay.length;

  // Step 1: Not enough flowers to make m bouquets
  if (m * k > n) return -1;

  // Step 2: Define binary search range
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  // Step 3: Binary Search on days
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if we can make m bouquets in 'mid' days
    if (canMakeBouquets(mid, bloomDay, m, k)) {
      // Possible answer, try finding a smaller day
      high = mid - 1;
    } else {
      // Need more days
      low = mid + 1;
    }
  }

  // Step 4: low points to the minimum valid day
  return low;
}

function canMakeBouquets(day, bloomDay, m, k) {
  let flowers = 0; // Consecutive bloomed flowers
  let bouquets = 0; // Total bouquets formed

  for (let bloom of bloomDay) {
    // Flower has bloomed by 'day'
    if (bloom <= day) {
      flowers++;

      // Form a bouquet when we get k adjacent flowers
      if (flowers === k) {
        bouquets++;
        flowers = 0;
      }
    } else {
      // Adjacency breaks
      flowers = 0;
    }
  }

  return bouquets >= m;
}

let bloomDay = [1, 10, 3, 10, 2];
let m = 3;
let k = 1;

console.log(minDays(bloomDay, m, k)); // 3

// Example 2
console.log(minDays([1, 10, 3, 10, 2], 3, 2)); // -1

// Example 3
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12
