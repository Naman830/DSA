/*
Key observations

- An element belongs to the intersection if it exists in both arrays.
- A Set helps check whether an element exists in constant average time, \(O(1)\).
- To avoid duplicate elements in the result, use another Set or check whether the result already contains the element.
- If both arrays are sorted, a two-pointer approach can solve the problem efficiently.
*/

/*
Approach 1: Brute force — nested loops
For every element in the first array, search for the same element in the second array. Add it to the result only if it is not already present.
*/

function intersection(arr1, arr2) {
  const result = [];

  // Check each element of the first array
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // If the element exists in both arrays
      if (arr1[i] === arr2[j]) {
        // Avoid duplicates in the result
        if (!result.includes(arr1[i])) {
          result.push(arr1[i]);
        }

        break;
      }
    }
  }

  return result;
}

console.log(intersection([1, 2, 2, 3, 4], [2, 3, 4, 5]));
// [2, 3, 4]

/*
Complexity

- Time: \(O(nm + k^2)\), where \(n,m\) are the array lengths and \(k\) is the number of distinct common elements.
- Auxiliary space: \(O(k)\) for the result.

The nested loops take \(O(nm)\); includes() adds the extra \(O(k^2)\) worst-case work.
*/

/*
Approach 2: Better — use a Set for the second array
Store the elements of the second array in a Set. Then check each element of the first array against it.
*/

function intersectionBetter(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = new Set();

  // Check which elements of arr1 also exist in set2
  for (const num of arr1) {
    if (set2.has(num)) {
      result.add(num); // Set automatically removes duplicates
    }
  }

  return [...result];
}

console.log(intersectionBetter([1, 2, 2, 3, 4], [2, 3, 4, 5]));
// [2, 3, 4]
