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

// BETTER APPROACH
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
