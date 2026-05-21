// It means: Move first K elements to the end.
// If: k = array length [then array becomes same again.]
// For Solution, we use (k = k % n) Because rotations repeat in cycle.

// Brute Force Approach:
// 1. Store first k elements in temp array
// 2. Shift remaining elements left
// 3. Put temp elements at end
// TC: O(n) and SC: O(k)

function leftRotateByK(arr, k) {
  let n = arr.length;
  k = k % n; // To handle cases where k > n

  let temp = [];

  // Step 1: Store first k elements in temp array
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }

  // Step 2: Shift remaining elements left
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  //Step 3: put temp elements at end
  for (let i = 0; i < k; i++) {
    arr[n - k + i] = temp[i];
  }

  return arr;
}

console.log(leftRotateByK([1, 2, 3, 4, 5, 6, 7], 3));
