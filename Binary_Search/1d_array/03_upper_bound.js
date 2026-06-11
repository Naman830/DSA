// The Upper Bound of x is:
// The first index where the value is strictly greater than x ( > x ).

/*
It is similar as upper bount just remove = from the if condition

Intuition

Whenever we find an element:
arr[mid] > x

it can be the answer.
Store it and continue searching on the left side.

Time: O(log n)
Space: O(1)
*/

function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  // If upper bound doesn't exist,
  // answer will become arr.length
  let ans = arr.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Current element can be an upper bound
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1; // search for earlier valid index
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
