/*
┌──────────────────────────────┐
│ 1. Skip leading spaces       │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ 2. Check + or -              │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ 3. Read digits only          │
│    until non-digit appears   │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ 4. Apply the sign            │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ 5. Clamp to 32-bit range     │
└──────────────────────────────┘
*/

// myAtoi: Convert a string to a 32-bit signed integer.
function myAtoi(s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  function solve(index, sign, num) {
    // Base case:
    // End of string OR current character is not a digit
    if (index >= s.length || s[index] < "0" || s[index] > "9") {
      return sign * num;
    }

    const digit = s.charCodeAt(index) - 48;

    // Check overflow BEFORE adding digit
    if (num > Math.floor((2147483647 - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    // Take current digit
    num = num * 10 + digit;

    // Go to next character
    return solve(index + 1, sign, num);
  }

  // 1. Skip leading spaces
  let i = 0;

  while (i < s.length && s[i] === " ") {
    i++;
  }

  // 2. Check sign
  let sign = 1;

  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  // 3. Recursively read digits
  return solve(i, sign, 0);
}
console.log(myAtoi("42abc"));
console.log(myAtoi("        -+40a2abc"));
