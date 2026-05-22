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
