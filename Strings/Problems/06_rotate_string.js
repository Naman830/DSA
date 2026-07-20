/*
s = "abcde"
goal = "cdeab"

Rotations:
abcde
↓
bcdea
↓
cdeab ✅

Answer: true

We have to check that if we rotate s some time until reach too goal s % length if not return false 

Key Observations
Both strings must have the same length.
Rotation never changes characters.
Only changes their positions.
Every possible rotation should be checked.
*/

// 1. Approach 1 — Brute Force
/*
Pseudocode
If lengths are different
    return false

Repeat n times
    if current string == goal
        return true

    rotate string

return false
*/

/*
Problem:
Given two strings s and goal,
return true if goal can be obtained by rotating s.
Otherwise return false.
*/

function rotateString(s, goal) {
  // Length must be same
  if (s.length !== goal.length) {
    return false;
  }

  // Check every possible rotation
  for (let i = 0; i < s.length; i++) {
    // If current rotation matches
    if (s === goal) {
      return true;
    }

    // Rotate once
    // First character goes to the end
    s = s.slice(1) + s[0];
  }

  return false;
}

// Test Cases
console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("aaaa", "aaaa")); // true
console.log(rotateString("water", "terwa")); // true

/*
| Case    | Time  | Space |
| ------- | ----- | ----- |
| Best    | O(n)  | O(n)  |
| Average | O(n²) | O(n)  |
| Worst   | O(n²) | O(n)  |

Why O(n²)?
There are n rotations.
Every string comparison and new rotated string creation takes O(n).
*/
