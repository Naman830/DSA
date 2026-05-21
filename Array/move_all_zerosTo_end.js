// It means: Move all 0s to the end while maintaining the relative order of non-zero elements.

// Brute Force Approach:
// TC: O(n) and SC: O(n)

function moveZeros(arr) {
  let temp = [];
  // Step 1: Store non-zero elements in temp array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  // Step 2: Count zeros
  let zeros = arr.length - temp.length;

  // Step 3: Add zeros at end of temp array
  for (let i = 0; i < zeros; i++) {
    temp.push(0);
  }
  return temp;
}

// Better / Optimal Solution (Two Pointer Approach)
// Instead of using extra array: We move non-zero elements toward left.

// We only care about: Where is the first zero?
// Because: non-zero elements before it are already correct
// next non-zero can replace that zero

// We use:
// i → position of zero
// j → searching non-zero element
// We swap ONLY when: arr[j] is non-zero

// TC: O(n) and SC: O(1)

function moveZeros(arr) {
  let n = arr.length;

  // Step 1: find first zero
  let i = -1;
  for (let j = 0; j < n; j++) {
    if (arr[j] === 0) {
      i = j;
      break;
    }
  }

  // If no zero found, return original array
  if (i === -1) {
    return arr;
  }

  // Step 2: Move non-zero elements to left
  for (let j = i + 1; j < n; j++) {
    if (arr[j] !== 0) {
      // Swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      // Move i to next zero position
      i++;
    }
  }
  return arr;
}

console.log(moveZeros([1, 0, 2, 3, 0, 4, 0, 1]));
