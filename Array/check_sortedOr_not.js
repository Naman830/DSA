// You only need to check: Is current element smaller than previous?

// Optimal Approach
// Traverse array once.

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([1, 5, 3, 7]));
