// Merge Sort is a sorting algorithm used to arrange elements in increasing or decreasing order.

// Main idea: Divide the array into smaller parts, sort those parts, then merge them back.

/*
1. Divide
Break the big problem into smaller problems.

2. Conquer
Solve the smaller problems.

3. Combine
Join the solved parts to get the final answer.
*/

/*
Pseudocode

mergeSort(array):
    if array has 0 or 1 element:
        return array

    find middle index

    leftHalf = mergeSort(left part)
    rightHalf = mergeSort(right part)

    return merge(leftHalf, rightHalf)


merge(left, right):
    create empty result array

    while both left and right have elements:
        compare first elements
        push smaller one into result

    add remaining elements from left
    add remaining elements from right

    return result
*/


// TC: O(n log n) and SC: O(n)

function mergeSort(arr) {
  // Base case:
  // If array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find middle index
  let mid = Math.floor(arr.length / 2);

  // Divide array into left and right parts
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort both halves
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  // Merge sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];

  let i = 0; // pointer for left array
  let j = 0; // pointer for right array

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining elements from right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example
let arr = [5, 2, 8, 1, 3];

console.log(mergeSort(arr));
