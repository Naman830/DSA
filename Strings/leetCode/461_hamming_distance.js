// Brian Kernighan's Algorithm
// Count the number of set bits (1s) in a binary number efficiently.
/*
Suppose you have a number.
13

Binary representation:
1101

There are 3 ones.
Answer = 3
*/

/*
Brian Kernighan's Observation
Instead of checking every bit,
remove one set bit at a time.

The trick is
n & (n - 1)

This removes the rightmost set bit.
Why does it work?

Let's understand carefully.

Take
n = 12

Binary
1100

Subtract 1
1100
   -
0001
= 1011

Now perform AND

1100
1011
----
100
See what happened?

1100
↓
1000
The last 1 disappeared.
*/

function hammingDistance(x, y) {
  let xor = x ^ y;
  let distance = 0;

  while (xor !== 0) {
    distance++;

    // Remove the rightmost set bit
    xor = xor & (xor - 1);
  }

  return distance;
}

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
console.log(hammingDistance(7, 7)); // 0
