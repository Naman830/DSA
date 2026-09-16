// It means:
// The first element moves to the last
// All other elements shift one step left

// Optimal Solution (In-place)
// 1. Store first element
// 2. Shift every element left
// 3. Put stored element at end
// TC: O(n) and SC: O(1)

function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    // Move Next element to current element
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;

  return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]));
