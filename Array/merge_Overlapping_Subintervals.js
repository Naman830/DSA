/*
You are given a list of intervals.

Each interval has:
[start, end]

Example:
[
  [1,3],
  [2,6],
  [8,10],
  [15,18]
]

An interval represents a range.
[1,3] => 1 to 3
[2,6] => 2 to 6

Since these ranges overlap, they should be merged.
Result:
[
  [1,6],
  [8,10],
  [15,18]
]

Imagine drawing intervals on a line:
[1-----3]
     [2--------6]
Both touch each other.

Instead of keeping both:
[1-------------6]
*/

// 1. Brute Force Solution
// For every interval: Check all remaining intervals.
// If overlap exists: Merge them. [Repeat until no merges are possible.]
// TC: O(n²) & O(n)

/*
Pseudocode
for every interval i

    for every interval j

        if overlap

            merge
*/

function mergeIntervalsBrute(intervals) {
  // Sort first so overlapping intervals come together
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    // Current interval boundaries
    let start = intervals[i][0];
    let end = intervals[i][1];

    // Keep merging with all overlapping intervals
    for (let j = i + 1; j < intervals.length; j++) {
      // Overlap exists
      if (intervals[j][0] <= end) {
        // Extend the end point
        end = Math.max(end, intervals[j][1]);

        // Move i forward because this interval is merged
        i = j;
      } else {
        break;
      }
    }

    result.push([start, end]);
  }

  return result;
}

console.log(
  mergeIntervalsBrute([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

// Output:
// [[1,6],[8,10],[15,18]]

// 2. Optimal Solution
// Sorting + Interval Merging Pattern
/* 
Step-by-Step Algorithm

Step 1
Sort intervals by start value.

Step 2
Push first interval into result.

Step 3
Loop through remaining intervals.

Step 4
If overlap:
currentStart <= lastEnd

Merge:
lastEnd = max(lastEnd,currentEnd)
Step 5

Otherwise push current interval.
*/

/*
Pseudocode

sort intervals

result = [first interval]

for each interval

    last = result[last index]

    if currentStart <= lastEnd

        lastEnd = max(lastEnd,currentEnd)

    else

        add current interval

return result
*/

// TC: O(n log n) & SC: O(n)
function mergeIntervals(intervals) {
  // Edge case
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals by start value
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  // Add first interval
  result.push(intervals[0]);

  // Process remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    // Last merged interval
    const last = result[result.length - 1];

    // Overlap exists
    if (current[0] <= last[1]) {
      // Extend the ending point
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap
      result.push(current);
    }
  }

  return result;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
