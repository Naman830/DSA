/*
Direct Multiplication

We don't need to actually generate the numbers.
We already know:

even index → 5 choices
odd index  → 4 choices

So we simply multiply the number of choices for every position.

Time  : O(n)
Space : O(1)
*/

function countGoodNumbersBetter(n) {
  const MOD = 1e7 + 7;

  let answer = 1;

  // Go through every position
  for (let i = 0; i < n; i++) {
    // Even index → 5 choices
    if (i % 2 === 0) {
      answer = (answer * 5) % MOD;
    }

    // Odd index → 4 choices
    else {
      answer = (answer * 4) % MOD;
    }
  }

  return answer;
}

console.log(countGoodNumbersBetter(1)); // 5
console.log(countGoodNumbersBetter(2)); // 20
console.log(countGoodNumbersBetter(4)); // 400
console.log(countGoodNumbersBetter(5)); // 2000
