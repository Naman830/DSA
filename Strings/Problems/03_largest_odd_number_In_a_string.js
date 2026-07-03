/*
Your task is to return the largest-valued odd number that can be formed by taking a prefix (starting from index 0) of the string.

Key observation 
If no odd number exists, return an empty string "".
A number is odd only if its last digit is odd.
Odd digits are: 1, 3, 5, 7, 9
We cannot rearrange digits.
We can only remove digits from the end.
Therefore, we need the rightmost odd digit.
*/

// 1. Brute Force
// Generate every prefix and check whether it is odd.
// Keep updating the answer whenever you find an odd prefix.

/*
Problem:
Given a string consisting of digits,
return the largest-valued odd number (prefix).
If none exists, return "".
*/

function largestOddNumber(num) {
  let answer = "";

  for (let i = 0; i < num.length; i++) {
    const prefix = num.slice(0, i + 1);

    // Last character of the current prefix
    const lastDigit = Number(prefix[prefix.length - 1]);

    if (lastDigit % 2 !== 0) {
      answer = prefix;
    }
  }

  return answer;
}

// Test Cases
console.log(largestOddNumber("52")); // "5"
console.log(largestOddNumber("35427")); // "35427"
console.log(largestOddNumber("4206")); // ""

/*
TC: O(n²)
SC: O(n)

Why O(n²)?
Because every slice() creates a new string.
*/

// 1. Optimal Approach
// Instead of checking every prefix, start from the end of the string.
// If the current digit is odd, then everything before it forms the largest odd number.
// Return the substring immediately.
// If no odd digit is found, return "".
