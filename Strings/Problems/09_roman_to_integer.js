/*
Key Observations (Interview)
Convert every Roman character into its numeric value.
Normally add every value.
If current value is smaller than next value, subtract it.
Otherwise, add it.
Traverse the string once.
*/

// Optimal Approach
/*
Go from left to right.

For every character,
If current value < next value
      subtract current
Else
      add current
*/

/*
Pseudocode
Create a map of Roman values

answer = 0

Loop through string
    current = value of current character
    next = value of next character

    If current < next
         subtract current
    Else
         add current

Return answer
*/

function romanToInteger(roman) {
  // Store Roman numeral values
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Final answer
  let result = 0;

  // Traverse the string
  for (let i = 0; i < roman.length; i++) {
    // Current Roman numeral value
    const current = values[roman[i]];

    // Next Roman numeral value (0 if no next character)
    const next = values[roman[i + 1]] || 0;

    // If current value is smaller than next,
    // it should be subtracted.
    if (current < next) {
      result -= current;
    } else {
      // Otherwise simply add it.
      result += current;
    }
  }

  return result;
}

// ------------------------
// Test Cases
// ------------------------
console.log(romanToInteger("III")); // 3
console.log(romanToInteger("LVIII")); // 58
console.log(romanToInteger("MCMXCIV")); // 1994
console.log(romanToInteger("IX")); // 9
console.log(romanToInteger("XL")); // 40
console.log(romanToInteger("CD")); // 400
console.log(romanToInteger("MMXXVI")); // 2026

// TC: O(n) || SC: O(1)
