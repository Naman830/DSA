// Intersection means: Elements that exist in BOTH arrays.

// BRUTE FORCE APPROACH
// Take each element from arr1. Search it completely in arr2.
// add to answer
// mark used element
// TC: O(n x m) and SC: O(m)

function intersectionBrute(arr1, arr2) {
  // Create a visit array and initalize it false or 0 in smaller array
  let vist = new Array(arr2.length).fill(false);
  // Create a empty answer array where we push our number
  let answer = [];
  // Traverse both two array
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // check if arr1 number === arr2 number and arr2 number is not vist
      if (arr1[i] === arr2[j] && arr2[j] !== vist) {
        // we push number in answer
        answer.push(arr1[i]);
        // We set visit to true so that it mark down that place and don't repeat
        vist[j] = true;
        break;
      }
    }
  }
  return answer;
}

console.log(intersectionBrute([1, 2, 2, 3], [2, 2, 3]));

// OPTIMAL APPROACH — TWO POINTERS
// TC: O(n + m) and SC: O(1) --> ignoring answer array

// Since arrays are sorted:
function intersectionOptimal(arr1, arr2) {
  let n1 = arr1;
  let n2 = arr2;

  let i = 0;
  let j = 0;
  let ans = [];

  while (i < arr1.length && j < arr2.length) {
    // If: arr1[i] < arr2[j]
    // Then: arr1[i] can NEVER match future smaller values
    // so move i (i++)
    if (n1[i] < n2[j]) {
      i++;
      // Similarly:
      // If: arr1[i] > arr2[j]
      // Move j. (j++)
    } else if (n1[i] > n2[j]) {
      j++;
      // If equal:
      // store answer andmove BOTH
    } else {
      ans.push(n1[i]);
      i++;
      j++;
    }
  }
  return ans;
}

console.log(intersectionOptimal([1, 2, 2, 3, 5], [2, 2, 3, 4, 5]));
