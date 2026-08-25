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

function myAtoi(s) {
  let i = 0;
  while (s[i] === " ") i++;

  let sign = 1;

  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  function solve(num) {
    // Stop
    if (i >= s.length || s[i] < "0" || s[i] > "9") {
      return num;
    }

    // Add current digit
    num = num * 10 + Number(s[i]);

    i++;

    // Read next digit
    return solve(num);
  }

  return sign * solve(0);
}

console.log(myAtoi("42abc"));
console.log(myAtoi("        -+40a2abc"));
