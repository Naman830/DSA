// The Lower Bound of x is:
// The first index where the value is greater than or equal to x (>= x).
/*
Intuition

Whenever we find an element that is >= x:
It can be a possible answer.
But there may be another valid answer on the left side.
So store it and move left.

Time: O(log n)
Space: O(1)
*/

function lowerBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  // If lower bound doesn't exist,
  // answer will become arr.length
  let ans = arr.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Current element can be a lower bound
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1; // search for earlier occurrence
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(lowerBound([1, 2, 4, 4, 5, 7], 2));

// 2. Search Insert Position is the similar problem of lower bound just paste the code and get the answer
