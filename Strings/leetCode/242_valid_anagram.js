/*
What is an Anagram?

Two strings are anagrams if:

They contain exactly the same characters
Each character appears the same number of times
The order does not matter.

Key Observations
Length must be the same.
Every character count must match.
Order doesn't matter.
*/

function isAnagram(s, t) {
  // If lengths are different, they can never be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // HashMap to store frequency of characters
  const map = new Map();

  // Count frequency of every character in first string
  for (let ch of s) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  // Traverse second string
  for (let ch of t) {
    // Character not found
    if (!map.has(ch)) {
      return false;
    }

    // Decrease frequency
    map.set(ch, map.get(ch) - 1);

    // More occurrences than expected
    if (map.get(ch) < 0) {
      return false;
    }
  }

  // All frequencies matched
  return true;
}

// Test Cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("aabb", "abab")); // true

/*
| Case    | Time     | Space    |
| ------- | -------- | -------- |
| Best    | **O(n)** | **O(k)** |
| Average | **O(n)** | **O(k)** |
| Worst   | **O(n)** | **O(k)** |

*/
