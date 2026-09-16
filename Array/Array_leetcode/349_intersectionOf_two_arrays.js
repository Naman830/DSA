// Elements present in BOTH arrays.

// Version 1 — Unique Intersection
// Each common element appears only once.

// Version 2 — Intersection II
// Duplicates are ALSO counted.

// Brute Force Approach
// TC: O(n × m) & SC: O(n)


function intersectionBrute(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    //  IF element already exists in answer continue
    if (answer.includes(arr1[i])) {
      continue;
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
        break;
      }
    }
  }
  return answer;
}

console.log(intersectionBrute([1, 2, 2, 1], [2, 2]));
