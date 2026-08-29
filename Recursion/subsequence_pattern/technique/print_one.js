/*
We have many possible answers, but we only want to find and print the first valid answer, then stop all further recursion.

Suppose:-
arr = [2, 1, 3]

Possible subsets include:
[2, 1]  → sum = 3 ✅
[3]     → sum = 3 ✅

We only want: [2, 1]
So once we find it, we return true and stop.
*/

function printOne(index, arr, current, sum, target) {
  // Base case:
  // If we reached the end of the array
  if (index === arr.length) {
    // Check whether current subset has target sum
    if (sum === target) {
      console.log(current);
      return true; // Found ONE answer
    }

    return false; // No answer on this path
  }

  // --------------------------------
  // 1. TAKE the current element
  // --------------------------------

  current.push(arr[index]);

  if (printOne(index + 1, arr, current, sum + arr[index], target)) {
    // If answer was found,
    // immediately stop recursion
    return true;
  }

  // Backtrack:
  // Remove the element we took
  current.pop();

  // --------------------------------
  // 2. DON'T TAKE the current element
  // --------------------------------

  if (printOne(index + 1, arr, current, sum, target)) {
    // If answer was found,
    // immediately stop recursion
    return true;
  }

  // No answer found on either path
  return false;
}

// Test case
printOne(0, [2, 1, 3], [], 0, 3);

/*
TIME COMPLEXITY:-
| Case    |      Time |
| ------- | --------: |
| Best    |  **O(n)** |
| Average | **O(2ⁿ)** |
| Worst   | **O(2ⁿ)** |

SPACE COMPLEXITY:-
| Case    |    Space |
| ------- | -------: |
| Best    | **O(n)** |
| Average | **O(n)** |
| Worst   | **O(n)** |
*/
