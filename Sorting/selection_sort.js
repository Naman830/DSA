// Selection Sort finds the minimum element from the unsorted part of the array and swaps it with the first element of that unsorted part.

/*
1. Assume current index has minimum value.
2. Search the remaining array.
3. Find actual minimum index.
4. Swap current element with minimum element.
*/

/*
Pseudo Code

selectionSort(arr):
    n = length of arr

    for i from 0 to n - 2:
        minIndex = i

        for j from i + 1 to n - 1:
            if arr[j] < arr[minIndex]:
                minIndex = j

        swap arr[i] and arr[minIndex]

    return arr

*/

// TC: O(n2) and SC: O(1);

function selectionSort(arr) {
  // Get the length of the array
  let n = arr.length;

  // Outer loop decides the position where the smallest element should come
  // We go only till n - 2 because the last element will automatically be sorted
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index has the minimum element
    let minIndex = i;

    // Inner loop finds the smallest element in the unsorted part
    // Unsorted part starts from i + 1
    for (let j = i + 1; j < n; j++) {
      // If we find a smaller element,
      // update minIndex to this new smaller element's index
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // After finding the minimum element,
    // swap it with the current position i
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  // Return the sorted array
  return arr;
}

// Example usage
let nums = [5, 2, 8, 1, 3];

console.log(selectionSort(nums));
// Output: [1, 2, 3, 5, 8]
