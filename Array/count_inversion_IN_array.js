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

// 2. Optimal Solution (Merge Sort)
// mid - leftPointer + 1 [key trick]

/*
Merge Sort already divides array into sorted halves.

While merging:
Left Half  -> Sorted
Right Half -> Sorted

We can efficiently count inversions.
Eventually all inversions are counted during merge operations.
*/

/*
Pseudocode

mergeSort(low, high)

    if low >= high
        return 0

    mid

    count =
        mergeSort(left)
      + mergeSort(right)
      + merge(left,right)

return count
*/

// TC: (n log n) & SC: O(1)
function countInversions(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, low, high) {
  // Base case: single element has 0 inversions
  if (low >= high) return 0;

  const mid = Math.floor((low + high) / 2);

  let count = 0;

  // Count inversions in left half
  count += mergeSort(arr, low, mid);

  // Count inversions in right half
  count += mergeSort(arr, mid + 1, high);

  // Count cross inversions while merging
  count += merge(arr, low, mid, high);

  return count;
}

function merge(arr, low, mid, high) {
  const temp = [];

  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);

      // arr[left] > arr[right]
      // Since left half is sorted,
      // all elements from left to mid
      // will form inversions with arr[right]
      count += mid - left + 1;

      right++;
    }
  }

  // Add remaining elements from left half
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Add remaining elements from right half
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Copy merged elements back to original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return count;
}

console.log(countInversions([5, 3, 2, 4, 1])); // 8
