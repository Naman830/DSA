// Second largest does NOT mean: second last element
// It means: the biggest element AFTER the maximum

// Approach 1 — Brute Force
// TC: O(n log n) and SC: O(1)

function secondLargest(arr) {
  //  Sort array 
  arr.sort((a, b) => a - b);

  let largest = arr[arr.length - 1];

  // -2 because we are starting from second last element // Traverse from back
  for (let i = arr.length - 2; i >= 0; i--) {
    // Find first element smaller than largest
    if (arr[i] < largest) {
      return arr[i];
    }
  }
  return -1; // if there is no second largest element
}

// Approach 2 — Better Solution (Two Pass)
// TC: O(n) and SC: O(1)

function secondLargest2(arr) {
  // Find Largest
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  //   Transverse array find biggest element smaller than largest
  let secondLargestElement = -1;
  for (let i = 0; i < arr.length; i++) {
    // Condition
    if (arr[i] > secondLargestElement && arr[i] != largest) {
      secondLargestElement = arr[i];
    }
  }
  return secondLargestElement;
}

// Approach 3 — Optimal Solution
// Maintain: largest and secondLargest at the same time.
// TC: O(n) and SC: O(1)

function secondLargest3(arr) {
  let largest = arr[0];
  let secondLargElement = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargElement = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargElement && arr[i] != largest) {
      secondLargElement = arr[i];
    }
  }
  return secondLargElement;
}

console.log(secondLargest3([4, 7, 1, 9, 2]));

// FOR FINDING THE SECOND SMALLEST ELEMENT, JUST REVERSE THE CONDITIONS IN THE ABOVE FUNCTION.
