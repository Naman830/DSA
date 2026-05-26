// Insertion Sort takes one element at a time and inserts it into its correct position.

/*
1. Pick the current element.
2. Compare it with previous elements.
3. Shift bigger elements to the right.
4. Insert current element at the correct place.
 */

/*
Pseudo Code

insertionSort(arr):
    for i from 1 to n - 1:
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j--

        arr[j + 1] = current

    return arr
*/

// TC: O(n2) and SC: O(1)

function insertionSort(arr) {
  let n = arr.length;

  // Start from index 1 because index 0 is considered already sorted
  for (let i = 1; i < n; i++) {
    // Current element we want to insert at the correct position
    let current = arr[i];

    // j points to the last element of the sorted part
    let j = i - 1;

    // Move elements greater than current one step to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert current at its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example
let nums = [5, 3, 4, 1, 2];

console.log(insertionSort(nums));
// Output: [1, 2, 3, 4, 5]
