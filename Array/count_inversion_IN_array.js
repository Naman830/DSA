/*
An inversion is a pair of indices (i, j) such that:

i < j
arr[i] > arr[j]

In simple words:
If a bigger number appears before a smaller number, it forms an inversion.

like arr[5,4,3,2,1]
(5,4), (5,3), (5,2) like this

not (4,5)
*/

// 1. Brute Force Solution
// Generate every possible pair.

// TC: O(n²) & SC: O(1)

function countInversions(arr) {
  let count = 0;

  // Loop through every element.
  for (let i = 0; i < arr.length; i++) {
    // Compare current element with all elements after it
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countInversions([5, 3, 2, 4, 1])); // 8

// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================

// 2. Optimal Solution (Merge Sort)
/*
Approach:
- Use Merge Sort.
- While merging two sorted halves:
  If left value > right value,
  then all remaining elements in left half are also greater.
  So, add (mid - left + 1) inversions.
*/

function mergeSort(arr, low, high) {
  low = 0;
  high - arr.length - 1;

  // Base case
  if (low >= high) return 0;

  const mid = Math.floor((low + high) / 2);

  let inversions = 0;

  // Count inversions in left half
  inversions += mergeSort(arr, low, mid);

  // Count inversions in right half
  inversions += mergeSort(arr, mid + 1, high);

  // Count inversions while merging
  inversions += merge(arr, low, mid, high);

  return inversions;
}

function merge(arr, low, mid, high) {
  const temp = [];

  let left = low;
  let right = mid + 1;
  let inversions = 0;

  // Merge two sorted halves
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;

      // All remaining left elements form inversions
      inversions += mid - left + 1;
    }
  }

  // Add remaining left elements
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Add remaining right elements
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Copy merged array back
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return inversions;
}

// Test Cases
console.log(countInversions([5, 3, 2, 4, 1])); // 8
console.log(countInversions([2, 4, 1, 3, 5])); // 3
console.log(countInversions([1, 2, 3, 4, 5])); // 0
console.log(countInversions([5, 4, 3, 2, 1])); // 10
