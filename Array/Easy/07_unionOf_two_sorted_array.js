// It means:
// Take all UNIQUE elements from both arrays.

// Arrays are already SORTED. [This is a HUGE clue.]
// Whenever arrays are sorted,

// your brain should think:
// Can I use two pointers? (Usually yes.)

// Brute Force Approach:
// Take all elements into one data structure that automatically removes duplicates. [Set in JavaScript is a good choice for this.]

// Time Complexity: O(n + m) where n and m are the lengths of the two arrays.
// Space Complexity: O(n + m) in the worst case when all elements are unique.

function unionArray(arr1, arr2) {
  let set = new Set();
  //  Insert all elemenets of arr1 into the set.
  for (let num of arr1) {
    set.add(num);
  }
  //  Insert all elemenets of arr2 into the set.
  for (let num of arr2) {
    set.add(num);
  }

  return [...set];
}

// Better / Optimal Solution (Two Pointers)

// How do we avoid duplicates?
// Before inserting into answer:
// Check: Is this already the last inserted element?
// If yes:
// skip it.

// TC: O(n + m) and SC: O(n + m)

function unionArray2(arr1, arr2) {
  let i = 0;
  let j = 0;

  let ans = [];
  // In this Like if array1(i) is lesser then array2(j[0]) then it store it in answer array and if arra1(i) is greater then array2(j) so that else condition run and j value print in the answer array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (ans.length === 0 || ans[ans.length - 1] !== arr1[i]) {
        ans.push(arr1[i]);
      }
      i++;
    } else {
      if (ans.length === 0 || ans[ans.length - 1] !== arr2[j]) {
        ans.push(arr2[j]);
      }
      j++;
    }
  }

  // What if our array(i) iteration is over so remaning element should be there so we check our remaing element in array

  // In this loops runs till the end of the answer array and check if array[i] is not match any number in it so it push it on that position

  // remaining elements of arr1
  while (i < arr1.length) {
    if (ans[ans.length - 1] !== arr1[i]) {
      ans.push(arr1[i]);
    }

    i++;
  }

  // remaining elements of arr2
  while (j < arr2.length) {
    if (ans[ans.length - 1] !== arr2[j]) {
      ans.push(arr2[j]);
    }

    j++;
  }

  return ans;
}
console.log(unionArray2([1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));
