/*
A number is called a Happy Number if we repeatedly replace the number with the sum of the squares of its digits until we get 1.

If we get 1, it's a happy number.
If we enter a cycle and never reach 1, it's not a happy number.
*/

/*
Key observations
- We need to calculate the square of every digit and add them.
- Repeat this process until we get 1.
- The important problem is detecting an infinite loop.
- We can use a Set to remember previously visited numbers.
- If a number appears again, we have entered a cycle.
*/

// Approach 1: Brute Force – Using a Set
// TC: O(K * D) && SC: O(K)

function isHappy(n) {
  const seen = new Set();

  while (n !== 1) {
    // If number already exists, cycle detected
    if (seen.has(n)) {
      return false;
    }

    // Store current number
    seen.add(n);

    let sum = 0;

    // Calculate sum of squares of digits
    while (n > 0) {
      let digit = n % 10;

      sum += digit * digit;

      n = Math.floor(n / 10);
    }

    // Update number
    n = sum;
  }

  return true;
}

// Approach 2: Better – Using Floyd's Cycle Detection

/*
Slow pointer moves one step at a time.
Fast pointer moves two steps at a time.
If both pointers meet before reaching 1, a cycle exists.

TC: O(K × D) && SC: O(1)
*/

function getNext(n) {
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;

    sum += digit * digit;

    n = Math.floor(n / 10);
  }

  return sum;
}

function isHappyOptimal(n) {
  let slow = n;
  let fast = n;

  while (true) {
    // Slow moves one step
    slow = getNext(slow);

    // Fast moves two steps
    fast = getNext(getNext(fast));

    // If fast reaches 1, number is happy
    if (fast === 1) {
      return true;
    }

    // Cycle detected
    if (slow === fast) {
      return false;
    }
  }
}

console.log(isHappyOptimal(19)); // true
console.log(isHappyOptimal(2)); // false
