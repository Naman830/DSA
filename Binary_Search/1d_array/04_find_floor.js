/*
Quick Memory Trick

| Concept                | Condition           |
| ---------------------- | ------------------- |
| Lower Bound            | First `>= x`        |
| Upper Bound            | First `> x`         |
| Search Insert Position | Same as Lower Bound |
| Floor                  | Largest `<= x`      |
| Ceil                   | Smallest `>= x`     |

*/

// The Floor of x is:
// The largest element that is less than or equal to x (<= x)
// Store it and try to find a larger valid value on the right side.
// Time: O(log n)
// Space: O(1)

function floorValue(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  // Stores floor value
  let ans = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Current element can be floor
    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1; // search for larger valid value
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

console.log(floorValue([1, 2, 4, 4, 5, 7], 2));
