function getPermutation(n, k) {
  // Store numbers that are still available.
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  // Convert k from 1-based position to 0-based index.
  k--;

  let answer = "";

  // We decide one position at a time.
  for (let remaining = n; remaining > 0; remaining--) {
    /*
      (remaining - 1)! tells us how many permutations
      can be created when we fix the current number.

      Example:
      remaining = 3

      (3 - 1)! = 2! = 2

      So every first number represents 2 permutations.
    */

    let factorial = 1;

    for (let i = 1; i <= remaining - 1; i++) {
      factorial *= i;
    }

    /*
      Find which block contains k.

      Example:
      k = 4
      factorial = 2

      index = 4 / 2 = 2
    */
    const index = Math.floor(k / factorial);

    // Pick the number from that block.
    answer += numbers[index];

    // Remove the selected number.
    numbers.splice(index, 1);

    /*
      Now find our position inside the selected block.
    */
    k %= factorial;
  }

  return answer;
}

// Test cases
console.log(getPermutation(3, 3)); // "213"
console.log(getPermutation(3, 4)); // "231"
console.log(getPermutation(4, 9)); // "2314"
