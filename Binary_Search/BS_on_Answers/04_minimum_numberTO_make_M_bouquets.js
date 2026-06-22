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
