function plusOne(digits) {
  // Start from the last digit because that's where addition begins
  for (let i = digits.length - 1; i >= 0; i--) {
    // If current digit is less than 9,
    // we can simply add 1 and we're done.
    if (digits[i] < 9) {
      digits[i]++;

      // No carry remains, so return the result.
      return digits;
    }

    // If current digit is 9:
    // 9 + 1 = 10
    // Write 0 and carry 1 to the next digit.
    digits[i] = 0;
  }

  // If we reach here, every digit was 9.
  // Examples:
  // [9]     -> [1,0]
  // [9,9]   -> [1,0,0]
  // [9,9,9] -> [1,0,0,0]

  // Add a new leading 1.
  digits.unshift(1);

  return digits;
}

console.log(plusOne([1, 2, 9]));
