/*
Understand the question

You are given:
- A sorted array.
- An integer K.
- An integer X.

You need to return exactly K elements closest to X.

Example:
arr = [1, 2, 3, 4, 5];
k = 4;
x = 3;

Possible windows:
- [1, 2, 3, 4] → distances: 2, 1, 0, 1
- [2, 3, 4, 5] → distances: 1, 0, 1, 2

Both have the same total distance. We choose the smaller elements when there's a tie.

Answer:
[1, 2, 3, 4]
*/

/*
Key observations
- The array is already sorted.
- We need exactly k consecutive elements in the sorted array.
- Instead of checking every possible combination, we can binary search for the starting index of our answer.
- Our possible starting indices range from 0 to n - k.
- Compare the two elements just outside the current window to decide which direction to move.
*/

/*
Approach 1: Brute Force — Sorting by distance
TC: O(n log n)	Sorting all elements
sc: O(n) copying the array and comparing 
*/

/*
Approach 2: Better — Two Pointers

Complexity	            Value	        Reason
Time	                O(n - k)	    Remove n-k elements
Auxiliary space	        O(1)	        Only two pointers
Output space	        O(k)	        Result array
*/
function findClosestElementsTWOPOINTER(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  // Remove elements until only k elements remain
  while (right - left + 1 > k) {
    const leftDiff = Math.abs(arr[left] - x);
    const rightDiff = Math.abs(arr[right] - x);

    // Remove the element farther from x
    if (leftDiff > rightDiff) {
      left++;
    } else {
      right--;
    }
  }

  // Return the remaining k elements
  return arr.slice(left, right + 1);
}

console.log(findClosestElementsTWOPOINTER([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]

/*
Approach 3: Optimal — Binary Search + Sliding Window

Complexity	        Value	           Explanation
Time	            O(log(n-k) + k)	    Binary search + returning k elements
Auxiliary space	    O(1)                Only pointers and variables
Output space	    O(k)	            Result returned by slice

The binary search itself takes O(log(n-k+1)) time.
*/
function findClosestElements(arr, k, x) {
  let low = 0;
  let high = arr.length - k;

  // Binary search for the starting index
  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    // Compare the elements outside the candidate window
    if (x - arr[mid] > arr[mid + k] - x) {
      // Right side is closer, move the window right
      low = mid + 1;
    } else {
      // Left side is closer or equally close
      high = mid;
    }
  }

  // Return k consecutive elements from the answer index
  return arr.slice(low, low + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]

console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
// Output: [1, 2, 3, 4]

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6));
// Output: [2, 3, 4, 5]
