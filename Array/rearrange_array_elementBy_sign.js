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

// 1. Brute Force Approach
// First collect all positive numbers in one array.
// Then collect all negative numbers in another array.
// Then merge them alternately.

/*
Pseudocode

create positives array
create negatives array

for each number in nums:
    if number is positive:
        add it to positives
    else:
        add it to negatives

create answer array

for i from 0 to positives.length - 1:
    add positives[i] to answer
    add negatives[i] to answer

return answer
*/

// TC: O(2n) & SC: O(n)

function rearrangeArray(nums) {
  let positives = [];
  let negatives = [];

  // Step 1: Separate positive and negative numbers
  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  let result = [];

  // Step 2: Add one positive and one negative alternately
  for (let i = 0; i < positives.length; i++) {
    result.push(positives[i]);
    result.push(negatives[i]);
  }

  return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));


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