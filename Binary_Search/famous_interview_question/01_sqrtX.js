// In this question find square root of a X and if root is in decimal so we have to return it's floor value

/*
Time Complexity: (O(log x))
Space Complexity: (O(1)
 */

function mySqrt(x) {
  let low = 0;
  let high = x;

  let ans = 0;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    // Check if mid is a valid square root
    if (mid * mid <= x) {
      ans = mid;

      // Search for a potentially larger answer
      low = mid + 1;
    } else {
      // mid is too large, search left half
      high = mid - 1;
    }
  }

  return ans;
}

console.log(mySqrt(8)); // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(27)); // 5
console.log(mySqrt(0)); // 0
