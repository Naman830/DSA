/*
You are given an array of asteroids.

Positive number → asteroid moving right ➡️
Negative number → asteroid moving left ⬅️

The absolute value represents its size.

Key observations:-
stack top  ➡️    ⬅️ current
Only then can they collide.

| Stack top | Current | Result         |
| --------- | ------- | -------------- |
| `5`       | `-3`    | `5` survives   |
| `3`       | `-5`    | `-5` survives  |
| `5`       | `-5`    | Both destroyed |
| `-5`      | `3`     | No collision   |
| `5`       | `3`     | No collision   |
*/

// 1. Brute Force
// The problem is that after every collision, we may need to scan the array again.
// Time:  O(n²) && Space: O(n)

// 2. Optimal Approach — Monotonic Stack
/*
For every asteroid:-

1. If there is no possible collision, simply push it.
2. If there is a collision compare their sizes.
*/

function asteroidCollision(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    let alive = true;

    // Collision is possible only when:
    // stack top is moving right (+)
    // current asteroid is moving left (-)
    while (
      alive &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      const top = stack[stack.length - 1];

      if (top < Math.abs(asteroid)) {
        // Stack asteroid is smaller -> it explodes
        stack.pop();
      } else if (top === Math.abs(asteroid)) {
        // Both have same size -> both explode
        stack.pop();
        alive = false;
      } else {
        // Current asteroid is smaller -> it explodes
        alive = false;
      }
    }

    // If current asteroid survived, add it to stack
    if (alive) {
      stack.push(asteroid);
    }
  }

  return stack;
}

// Test cases
console.log(asteroidCollision([5, 10, -5]));
// [5, 10]

console.log(asteroidCollision([8, -8]));
// []

console.log(asteroidCollision([10, 2, -5]));
// [10]

console.log(asteroidCollision([-2, -1, 1, 2]));
// [-2, -1, 1, 2]

console.log(asteroidCollision([5, 10, -15]));
// []

/*
| Case    |   Time |  Space |
| ------- | -----: | -----: |
| Best    | `O(n)` | `O(n)` |
| Average | `O(n)` | `O(n)` |
| Worst   | `O(n)` | `O(n)` |
*/
