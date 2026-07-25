/**
 * Merge Sort
 *
 * Time Complexity:
 * Best Case:    O(n log n)
 * Average Case: O(n log n)
 * Worst Case:   O(n log n)
 *
 * Space Complexity:
 * O(n)
 */

function mergeSort(arr) {
  // Base case: array with 0 or 1 element is already sorted
  if (arr.length <= 1) return arr;

  // Split array into two halves
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge both sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare both arrays and take the smaller element
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Test Cases
console.log(mergeSort([5, 2, 8, 1, 3])); // [1, 2, 3, 5, 8]
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([4, 4, 2, 1, 3])); // [1, 2, 3, 4, 4]
console.log(mergeSort([])); // []
console.log(mergeSort([7])); // [7]
