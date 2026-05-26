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



function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < n ; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minimumIndex];
    arr[minimumIndex] = temp;
  }
  return arr;
}

// Example usage
let nums = [5, 2, 8, 1, 3];

console.log(selectionSort(nums));
// Output: [1, 2, 3, 5, 8]



