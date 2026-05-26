// Bubble Sort works by repeatedly comparing two side-by-side elements and swapping them if they are in the wrong order.

/*
Pseudo Code

bubbleSort(arr):
    n = length of arr

    for i from 0 to n - 2:
        for j from 0 to n - 2:
            if arr[j] > arr[j + 1]:
                swap arr[j] and arr[j + 1]

    return arr
*/

// Average and Wrost case TC: O(n2) and Best case O(n)
// SC: O(1);

function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop controls passes
  for (let i = 0; i < n - 1; i++) {
    // This variable checks whether any swap happened in current pass
    let swapped = false;

    // Last i elements are already sorted,
    // so we do not compare them again
    for (let j = 0; j < n - 1 - i; j++) {
      // If current element is greater than next element,
      // they are in wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Mark that swap happened
        swapped = true;
      }
    }

    // If no swap happened in this pass,
    // it means the array is already sorted
    // So we can stop early
    if (swapped === false) {
      break;
    }
  }

  return arr;
}

let nums = [5, 1, 4, 2, 8];

console.log(bubbleSort(nums));
// Output: [1, 2, 4, 5, 8]
