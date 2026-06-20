/*
Suppose:
m = 64
n = 3

Possible cube roots:
1³ = 1
2³ = 8
3³ = 27
4³ = 64  ← Answer
5³ = 125

Notice:
As x increases,
xⁿ also increases.

This is a monotonic function.

Whenever:
Increasing x → Increasing answer

Use Binary Search 
*/
/**
 * Find nth root of m using Binary Search
 * Returns root if it exists exactly
 * Otherwise returns -1
 */

/*
Time: O(log m)
Space: O(1)
*/

// BINARY SEARCH BETTER APPROACH
function nthRoot(n, m) {
  // Search space for root
  let low = 1;
  let high = m;

  while (low <= high) {
    // Calculate middle element
    let mid = Math.floor((low + high) / 2);

    // Calculate mid raised to power n
    let value = mid ** n;

    // Exact root found
    if (value === m) {
      return mid;
    }

    // Root lies on right side
    if (value < m) {
      low = mid + 1;
    }
    // Root lies on left side
    else {
      high = mid - 1;
    }
  }

  // No exact nth root exists
  return -1;
}

console.log(nthRoot(3, 27));

/*
Better Version (Avoid Overflow)

In interviews, they may ask:
m = 10^18

Then:
mid ** n

can overflow.
So we multiply manually and stop early.
*/

function nthRootOptimal(n, m) {
  // Binary search on the answer (possible root values)
  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Calculate mid^n and stop early if it exceeds m
    let ans = 1;
    for (let i = 0; i < n; i++) {
      ans *= mid;
      if (ans > m) break;
    }

    if (ans === m) {
      // Exact nth root found
      return mid;
    } else if (ans < m) {
      // Need a larger root
      low = mid + 1;
    } else {
      // Need a smaller root
      high = mid - 1;
    }
  }

  // m does not have an integer nth root
  return -1;
}

console.log(nthRootOptimal(3, 27));
