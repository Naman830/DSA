// It means:

// Check elements one by one from start until:

// element is found
// OR
// array ends

// Best Case: O(1) - when the target is the first element of the array
// Worst Case: O(n) - when the target is the last element of the array or not present at all
// SC: O(1)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    //
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([5, 8, 2, 10, 6], 10));
