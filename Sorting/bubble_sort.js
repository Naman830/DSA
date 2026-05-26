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

function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop controls the passes
  for (let i = 0; i < n - 1; i++) {
    // After every pass, the largest element moves to the end
    // So we reduce the inner loop by i
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap when elements are in wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let nums = [5, 1, 4, 2, 8];

console.log(bubbleSort(nums));
// Output: [1, 2, 4, 5, 8]
