/*
You are given an array containing positive and negative numbers.

You need to rearrange the array so that:

Positive and negative numbers come alternately.
The first element should be positive.
The relative order of positive numbers should remain the same.
The relative order of negative numbers should remain the same.

Since the answer starts with positive:

positive, negative, positive, negative, positive, negative

Positive numbers will always be placed at even indices:
0, 2, 4, 6...

Negative numbers will always be placed at odd indices:
1, 3, 5, 7...
*/

// VARITY 1ST if postive and negatives are equal

// 1. Brute Force Approach
// First collect all positive numbers in one array.
// Then collect all negative numbers in another array.
// Then merge them alternately.

// Optimal Approach
// Instead of storing positives and negatives separately first, we can create the result array directly.

/*
Pseudocode

create result array of size n

positiveIndex = 0
negativeIndex = 1

for each number in nums:
    if number is positive:
        result[positiveIndex] = number
        positiveIndex = positiveIndex + 2
    else:
        result[negativeIndex] = number
        negativeIndex = negativeIndex + 2

return result
*/

// TC: O(n) and SC: O(n)

function rearrangeArrayOptimal(nums) {
  let n = nums.length;

  // This array will store the final rearranged answer
  let result = new Array(n);

  // Positive numbers should be placed at even indices: 0, 2, 4...
  let positiveIndex = 0;

  // Negative numbers should be placed at odd indices: 1, 3, 5...
  let negativeIndex = 1;

  // Traverse every number in the input array
  for (let num of nums) {
    if (num > 0) {
      // Place positive number at current even index
      result[positiveIndex] = num;

      // Move to next even position
      positiveIndex += 2;
    } else {
      // Place negative number at current odd index
      result[negativeIndex] = num;

      // Move to next odd position
      negativeIndex += 2;
    }
  }

  return result;
}

console.log(rearrangeArrayOptimal([3, 1, -2, -5, 2, -4]));

// TC: O(n) and SC: O(n)

// Varity 2 positve and negatives are not equal

function rearrangeArrayUnequal(nums) {
  let positives = [];
  let negatives = [];

  // Separate positives and negatives
  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  let result = [];
  let i = 0;
  let j = 0;

  // Add alternatively while both arrays have elements
  while (i < positives.length && j < negatives.length) {
    result.push(positives[i]);
    result.push(negatives[j]);
    i++;
    j++;
  }

  // Add remaining positives
  while (i < positives.length) {
    result.push(positives[i]);
    i++;
  }

  // Add remaining negatives
  while (j < negatives.length) {
    result.push(negatives[j]);
    j++;
  }

  return result;
}

console.log(rearrangeArrayUnequal([3, 1, -2, -5, 2]));