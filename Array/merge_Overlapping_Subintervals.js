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

Input
Array of intervals:
[[start1,end1],[start2,end2],...]

Output
Merged intervals.
Hidden Observation
Two intervals overlap if:

currentStart <= previousEnd

Example:
[1,3]
[2,6]

2 <= 3

=> Overlap exists

Merge:
start = min(1,2) = 1
end   = max(3,6) = 6

=> [1,6]
2. Intuition

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

/*
Pseudocode

for every interval i

    for every interval j

        if overlap

            merge
*/