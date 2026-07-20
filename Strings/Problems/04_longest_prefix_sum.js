/*
Key Observations (Short)

Prefix always starts from the beginning of the string.
Every string must contain that prefix.
As soon as one character differs, stop.
If there is no common first character, return "".
The answer can never be longer than the shortest string.
*/

// 1. Brute Force (Character by Character) ⭐⭐⭐ (Most Common)
/*
Take the first string as a reference.
Check each character of the first string.
Compare that character with the same position in every other string.
If any character is different or one string ends, stop.
Whatever matched so far is the answer.
*/

function longestCommonPrefix(strs) {
  // Edge case: empty array
  if (strs.length === 0) {
    return "";
  }

  // This will store our final answer
  let prefix = "";

  // Pick the first string as reference
  let firstWord = strs[0];

  // Traverse every character of the first word
  for (let i = 0; i < firstWord.length; i++) {
    // Current character we want every string to have
    let currentChar = firstWord[i];

    // Compare this character with every other string
    for (let j = 1; j < strs.length; j++) {
      // If:
      // 1. Current string ended
      // 2. Characters don't match
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return prefix;
      }
    }

    // Character matched in every string
    prefix += currentChar;
  }

  return prefix;
}

// Test Cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["apple", "app", "application"])); // app
console.log(longestCommonPrefix(["abc"])); // abc

/*
| Case    | Complexity   |
| ------- | ------------ |
| Best    | **O(n)**     |
| Average | **O(n × m)** |
| Worst   | **O(n × m)** |

SC: O(1)
*/
