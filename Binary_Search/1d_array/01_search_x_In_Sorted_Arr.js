// Binary Search is a searching algorithm used on a sorted array.
/*
Imagine you are searching for the word "Monkey" in a dictionary.

Linear Search Approac
Start from page 1 and keep turning pages until you find it.

Page 1 → No
Page 2 → No
...
Very slow


Binary Search Approach
Open the dictionary from the middle.
Suppose middle word is "Lion".
Since "Monkey" comes after "Lion", ignore the left half.
Open the middle of the remaining right half.
Repeat until found.

Every step removes half of the remaining pages.
This is exactly how Binary Search works.

*/

/*
Why Binary Search is Fast

| Elements  | Maximum Checks |
| --------- | -------------- |
| 10        | 4              |
| 100       | 7              |
| 1000      | 10             |
| 1,000,000 | 20             |

Because every iteration removes half the elements.
Time Complexity: O(log n)
*/

// 1. Iterative Binary Search
// Keep shrinking the search space using a loop.
/*
Pseudocode
low = 0
high = n - 1

while low <= high
    mid = (low + high) / 2

    if arr[mid] == target
        return mid

    else if arr[mid] < target
        low = mid + 1

    else
        high = mid - 1

return -1
*/

// Time  : O(log n)
// Space : O(1)

function binarySearchIte(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Find middle index
    const mid = Math.floor((low + high) / 2);

    // Target found
    if (arr[mid] === target) {
      return mid;
    }

    // Search in right half
    if (arr[mid] < target) {
      low = mid + 1;
    }
    // Search in left half
    else {
      high = mid - 1;
    }
  }

  // Target not present
  return -1;
}

// 2. Recursive Binary Search
// Instead of using a loop, let the function search smaller halves recursively.
/*
Pseudocode

binarySearch(low, high)

if low > high
    return -1

mid = (low + high) / 2

if arr[mid] == target
    return mid

if target < arr[mid]
    search left half

else
    search right half
*/

// Complexity
// Time  : O(log n)
// Space : O(log n)

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  // Base case: element not found
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  // Target found
  if (arr[mid] === target) {
    return mid;
  }

  // Search left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, low, mid - 1);
  }

  // Search right half
  return binarySearch(arr, target, mid + 1, high);
}
