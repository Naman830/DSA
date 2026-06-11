/*
Key Takeaways
Binary Search requires a sorted array.
Compare with the middle element.
Remove half of the search space every step.
Iterative version uses O(1) space.
Recursive version uses O(log n) stack space.
Always use:
const mid = low + Math.floor((high - low) / 2);

to avoid overflow.
7. Binary Search complexity is: O(log n)
which is much faster than linear search O(n).

Use Binary Search when you see:
Type 1: Search in Sorted Array
Find X in sorted array

Type 2: First/Last Occurrence
Find first index of target
Find last index of target

Type 3: Answer Search
Minimum possible value
Maximum possible value
*/

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

// Overflow Case (Very Important for Interviews)
/*
Most beginners calculate:
mid = Math.floor((low + high) / 2);

Problem
Suppose:
low  = 2,000,000,000
high = 2,100,000,000

Then:
low + high
= 4,100,000,000

This may exceed the maximum integer limit in some languages like C++, Java, etc.
This is called Integer Overflow.

Safe Formula
Instead use:
mid = low + Math.floor((high - low) / 2);

Why?
(high - low)
is always much smaller than

(low + high)

So overflow cannot occur.

Interview Standard Formula
const mid = low + Math.floor((high - low) / 2);

Use this everywhere in Binary Search problems.
*/
