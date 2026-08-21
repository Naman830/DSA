/*
You are given a number as a string and an integer k.
You must remove exactly k digits so that the remaining number is as small as possible.

Example:
num = "1432219"
k = 3

Remove 4, 3, and 2:
1432219
 ↓↓↓
1219

Answer: 1219
*/

/*
1. Brute Force
Try every possible way of removing k digits and choose the smallest result.
Problem: the number of possibilities becomes huge.

Time: roughly O(2^n)
Space: O(n)
*/

/*
2. Optimal Approach — Monotonic Stack

i. Given a string num representing a non-negative integer and an integer k,
ii. remove exactly k digits from num so that the resulting number is the smallest possible.
iii. Return the resulting number as a string.
*/

function removeKdigits(num, k) {
  const stack = [];

  for (const digit of num) {
    // Remove larger digits from the left
    // because replacing them with a smaller digit
    // will make the number smaller.
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }

    stack.push(digit);
  }

  // If digits are still left to remove,
  // remove them from the end.
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros.
  let result = stack.join("").replace(/^0+/, "");

  // If nothing remains, return "0".
  return result || "0";
}

// Test cases
console.log(removeKdigits("1432219", 3)); // "1219"
console.log(removeKdigits("10200", 1)); // "200"
console.log(removeKdigits("10", 2)); // "0"
console.log(removeKdigits("1234567890", 9)); // "0"
