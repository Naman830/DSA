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
