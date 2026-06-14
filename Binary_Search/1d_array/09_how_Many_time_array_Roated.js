// This is similar as previous problem just we have to keep track of index

/*
How many times the array has been rotated?

Example
Original Sorted Array:
[1, 2, 3, 4, 5]

Rotated 2 times:
[4, 5, 1, 2, 3]

Answer: 2

because the array was rotated 2 times.
*/

/*
Time  : O(log n)
Space : O(1)
*/

function countRotations(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    // Minimum lies on right side
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    }
    // Minimum lies on left side (including mid)
    else {
      high = mid;
    }
  }

  // low points to minimum element
  return low;
}

console.log(countRotations([15, 18, 2, 3, 6, 12]));
