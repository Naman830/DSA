/*
SHORT SUMMARY 

We are minimizing
    Largest Distance
NOT
    Average Distance
NOT
    Total Distance

Always think:
"What is the biggest gap after placing new stations?
That biggest gap should be as small as possible.
*/

/*
You are given:

A sorted array stations[] representing the positions of existing gas stations.
An integer k, representing the number of new gas stations you can build.

Your task is to place exactly k new gas stations between the existing stations so that:

The maximum distance between any two adjacent gas stations becomes as small as possible.

Return that minimum possible maximum distance.


Example
stations = [1, 7]
k = 2

Initially
1 ---------------------- 7

Distance = 6
We can add two stations.

Best placement:

1 ---- 3 ---- 5 ---- 7

Distances:
2
2
2

Maximum distance = 2
Answer = 2
*/

// 1. Brute Force Solution
/*
Pseudocode
Find the interval with the largest current section.
Add one gas station to that interval.
Update its largest section.

extraStations[] = 0

Repeat k times
    maxGap = -1
    index = -1

    For every interval

        currentGap =
        originalGap /
        (extraStations[i] + 1)

        if currentGap > maxGap

             maxGap = currentGap
             index = i

    extraStations[index]++
    
Return maximum current gap
*/

/**
 * Brute Force Solution
 *
 * Idea:
 * Always place the next gas station in the interval
 * which currently has the largest distance.
 */

function minimiseMaxDistance(stations, k) {
  const n = stations.length;

  // Stores how many extra gas stations are added
  // between stations[i] and stations[i + 1]
  const extraStations = new Array(n - 1).fill(0);

  // Place k gas stations one by one
  for (let gas = 0; gas < k; gas++) {
    let maxGap = -1;
    let maxIndex = -1;

    // Find the interval having the largest current gap
    for (let i = 0; i < n - 1; i++) {
      // Original distance of this interval
      const gap = stations[i + 1] - stations[i];

      // Current largest section after inserting stations
      const currentGap = gap / (extraStations[i] + 1);

      if (currentGap > maxGap) {
        maxGap = currentGap;
        maxIndex = i;
      }
    }

    // Place one more station in that interval
    extraStations[maxIndex]++;
  }

  // Find the final maximum distance
  let answer = 0;

  for (let i = 0; i < n - 1; i++) {
    const gap = stations[i + 1] - stations[i];
    const currentGap = gap / (extraStations[i] + 1);

    answer = Math.max(answer, currentGap);
  }

  return answer;
}

// Example
const stations1 = [1, 2, 3, 4, 5];
const k1 = 4;

/*
Time Complexity: O(n × k)
Space Complexity: O(n)
*/

// 2. Optimal Solution (Binary Search)

// Returns how many stations are needed so that
// every section length is <= maxDistance
function requiredStations(stations, maxDistance) {
  let required = 0;

  for (let i = 0; i < stations.length - 1; i++) {
    // Length of current interval
    const gap = stations[i + 1] - stations[i];

    // Minimum stations required in this interval
    required += Math.ceil(gap / maxDistance) - 1;
  }

  return required;
}

function minimiseMaxDistanceBinary(stations, k) {
  // Binary search range
  let low = 0;
  let high = 0;

  // Largest existing gap
  for (let i = 0; i < stations.length - 1; i++) {
    high = Math.max(high, stations[i + 1] - stations[i]);
  }

  // Precision up to 6 decimal places
  while (high - low > 1e-6) {
    const mid = low + (high - low) / 2;

    // Stations required for this maximum distance
    const needed = requiredStations(stations, mid);

    if (needed <= k) {
      // Possible -> try smaller maximum distance
      high = mid;
    } else {
      // Not possible -> increase the allowed distance
      low = mid;
    }
  }

  return high;
}
console.log(minimiseMaxDistanceBinary(stations1, k1));
