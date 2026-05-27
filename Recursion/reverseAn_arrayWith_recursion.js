/*
first element with last element
second element with second last element
third element with third last element

[1, 2, 3, 4, 5]

swap 1 and 5 → [5, 2, 3, 4, 1]
swap 2 and 4 → [5, 4, 3, 2, 1]
*/

// TWO POINTER
function reverseArray(arr, left, right) {
  // Base case:
  // When left crosses or equals right, array is reversed
  if (left >= right) {
    return;
  }

  // Swap left and right elements
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  // Recursive call for remaining inner array
  reverseArray(arr, left + 1, right - 1);
}

let arr = [1, 2, 3, 4, 5];

reverseArray(arr, 0, arr.length - 1);

console.log(arr);

// SINGLE POINTER
function reverseArray(arr, i) {

  // Base case:
  // If i reaches the middle of array, stop recursion
  if (i >= Math.floor(arr.length / 2)) {
    return;
  }

  // Opposite index from the end
  let oppositeIndex = arr.length - i - 1;

  // Swap arr[i] and arr[oppositeIndex]
  let temp = arr[i];
  arr[i] = arr[oppositeIndex];
  arr[oppositeIndex] = temp;

  // Recursive call for next index
  reverseArray(arr, i + 1);
}

let arr = [1, 2, 3, 4, 5];
reverseArray(arr, 0);
console.log(arr);
