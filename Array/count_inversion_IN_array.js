/*
An inversion is a pair of indices (i, j) such that:

i < j
arr[i] > arr[j]

In simple words:
If a bigger number appears before a smaller number, it forms an inversion.
*/

// 1. Brute Force Solution
// Generate every possible pair.

/*
Loop through every element.
Compare with all elements after it.
If greater, increment count.

Pseudocode

count = 0

for i = 0 to n-1
    for j = i+1 to n-1

        if arr[i] > arr[j]
            count++

return count
*/

// TC: O(n²) & SC: O(1)

function countInversions(arr) {
  let count = 0;

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

// Optimal Solution (Merge Sort)
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
