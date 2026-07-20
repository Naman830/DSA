/*
1. Easy Explanation

Imagine someone gives you a string like:
"   -42"

Your job is to convert it into an integer.

But the string may contain:
Spaces before the number
A + or - sign

Numbers

Extra characters after the number
You must read only the valid part and ignore the rest.

For example
"42"          → 42
"   -42"      → -42
"4193abc"     → 4193
"words123"    → 0

This is exactly what the C/C++ function atoi() does.

Rules
Ignore leading spaces.
Check if the next character is + or -.
Read digits until a non-digit appears.
If no digit is found, return 0.
If the number exceeds the 32-bit signed integer range:
*/

// 1. Optimal Approach
/*
Remove leading spaces, 
determine the sign, 
then build the number digit by digit. 
After each digit, ensure the value stays within the 32-bit signed integer range.
This solution runs in O(n) time and O(1) extra space.
*/

/*
Pseudocode
Skip leading spaces

Check + or -

answer = 0

While current character is digit
    answer = answer * 10 + digit

    if overflow
        return INT_MAX or INT_MIN

Return answer * sign
*/
function myAtoi(str) {
  let i = 0;
  const n = str.length;

  // Step 1: Skip leading spaces
  while (i < n && str[i] === " ") {
    i++;
  }

  // Step 2: Check sign
  let sign = 1;

  if (i < n && (str[i] === "+" || str[i] === "-")) {
    if (str[i] === "-") sign = -1;
    i++;
  }

  // Step 3: Build the number
  let result = 0;

  while (i < n && str[i] >= "0" && str[i] <= "9") {
    const digit = str[i].charCodeAt(0) - "0".charCodeAt(0);

    result = result * 10 + digit;

    // Step 4: Clamp to 32-bit signed integer range
    if (sign * result > 2147483647) return 2147483647;
    if (sign * result < -2147483648) return -2147483648;

    i++;
  }

  return sign * result;
}

// Test Cases
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("91283472332")); // 2147483647
console.log(myAtoi("+123")); // 123
console.log(myAtoi("00000123")); // 123
console.log(myAtoi("+-12")); // 0
