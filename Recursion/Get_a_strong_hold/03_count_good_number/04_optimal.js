/*
we observe:
even positions = ceil(n / 2)
odd positions  = floor(n / 2)

How can we calculate x^n efficiently?
TC: O( log n ) && SC: O(1)
*/

function countGoodNumbers(n) {
  const MOD = 1000000007n;

  // ------------------------------------------------
  // This function calculates:
  //
  // base^power
  //
  // efficiently using Binary Exponentiation.
  //
  // Example:
  // power(5, 3) = 5^3 = 125
  // ------------------------------------------------
  function power(base, exponent) {
    base = BigInt(base);
    exponent = BigInt(exponent);

    let result = 1n;

    // Keep reducing exponent until it becomes 0
    while (exponent > 0n) {
      // If exponent is odd,
      // multiply our answer by base
      if (exponent % 2n === 1n) {
        result = (result * base) % MOD;
      }

      // Square the base
      //
      // Example:
      // 5 → 25 → 625 → ...
      //
      // This helps us calculate powers much faster.
      base = (base * base) % MOD;

      // Divide exponent by 2
      exponent = exponent / 2n;
    }

    return result;
  }

  // Count how many even indexes we have.
  const evenPositions = Math.ceil(n / 2);

  // Count how many odd indexes we have.
  const oddPositions = Math.floor(n / 2);

  // Every even position has 5 choices.
  const evenWays = power(5, evenPositions);

  // Every odd position has 4 choices.
  const oddWays = power(4, oddPositions);

  // ------------------------------------------------
  // Multiply both together.
  //
  // Example:
  //
  // n = 5
  //
  // evenPositions = 3
  // oddPositions  = 2
  //
  // answer = 5^3 × 4^2
  //        = 125 × 16
  //        = 2000
  // ------------------------------------------------
  const answer = (evenWays * oddWays) % MOD;

  return Number(answer);
}

// Test cases
console.log(countGoodNumbers(1)); // 5
console.log(countGoodNumbers(2)); // 20
console.log(countGoodNumbers(4)); // 400
console.log(countGoodNumbers(5)); // 2000
