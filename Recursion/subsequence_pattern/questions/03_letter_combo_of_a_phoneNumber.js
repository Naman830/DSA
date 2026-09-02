/*
Explanation:-
You are given a string of digits from 2 to 9.
Each digit represents some letters, just like on an old phone keypad:
You need to return all possible strings that can be formed by choosing one letter from each digit.

Key Observation:-
Every digit = one recursion level.
At each level, we have 3 or 4 choices.
We choose one letter and move to the next digit.
When all digits are processed, we have one complete answer.
After exploring one choice, we backtrack and try the next choice.
If digits === "", return [].
*/

/*
digits = "23"
So the recursion tree looks like:

                    ""
             /       |       \
            a        b        c
          / | \    / | \    / | \
        ad ae af  bd be bf  cd ce cf
*/

/*
| Case        | Time Complexity | Space Complexity |
| ----------- | --------------: | ---------------: |
| **Best**    |    `O(3^n × n)` |     `O(3^n × n)` |
| **Average** |    `O(k^n × n)` |     `O(k^n × n)` |
| **Worst**   |    `O(4^n × n)` |     `O(4^n × n)` |
*/

function letterCombinations(digits) {
  // If there are no digits, there are no combinations.
  if (digits.length === 0) {
    return [];
  }

  // Mapping of each phone digit to its corresponding letters.
  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // Stores all final combinations.
  const result = [];

  /*
    backtrack:
    index   → current digit we are processing
    current → combination we have built so far
    */
  function backtrack(index, current) {
    // Base case:
    // We have processed every digit.
    if (index === digits.length) {
      result.push(current);
      return;
    }

    // Get the letters corresponding to the current digit.
    const letters = phone[digits[index]];

    // Try every possible letter for this digit.
    for (const letter of letters) {
      // Choose
      current += letter;

      // Explore
      backtrack(index + 1, current);

      // Backtrack
      // Remove the letter we just added.
      current = current.slice(0, -1);
    }
  }

  // Start recursion from the first digit.
  backtrack(0, "");

  return result;
}

// Test cases
console.log(letterCombinations("23"));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations("2"));
// ["a","b","c"]

console.log(letterCombinations("79"));
// [
//   "pw", "px", "py", "pz",
//   "qw", "qx", "qy", "qz",
//   "rw", "rx", "ry", "rz",
//   "sw", "sx", "sy", "sz"
// ]

console.log(letterCombinations(""));
// []
