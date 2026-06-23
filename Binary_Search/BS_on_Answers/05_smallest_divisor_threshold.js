/*
You are given:
An array nums
A number threshold

Choose a divisor d.
For every element:

Math.ceil(nums[i] / d)
Calculate the sum of all these values.

You need to find the smallest divisor d such that:

sum <= threshold
Example
nums = [1, 2, 5, 9]
threshold = 6

If divisor = 5
ceil(1/5) = 1
ceil(2/5) = 1
ceil(5/5) = 1
ceil(9/5) = 2
sum = 5

Since:
5 <= 6

Divisor 5 works.
Now check smaller divisors:

d = 4
sum = 1+1+2+3 = 7
Not valid.

So answer = 5

Key: You can search the answer bettween 1 to max number in the array 
*/

// 1. Brute Force Solution

/*
Time  : O(max(nums) * n)
Space : O(1)
*/

/*
Pseudocode
maxVal = maximum element

for divisor = 1 to maxVal
    sum = 0

    for every number
        sum += ceil(num/divisor)

    if sum <= threshold
        return divisor
*/

// 2. Optimal Solution (Binary Search)

// TC: O(n * log m) && SC: O(1)

function smallestDivisor(nums, threshold) {
  // Smallest possible divisor
  let low = 1;

  // Largest possible divisor
  let high = Math.max(...nums);

  // Store the smallest valid divisor found so far
  let ans = high;

  // Binary Search on divisor
  while (low <= high) {
    // Find middle divisor
    let mid = Math.floor((low + high) / 2);

    // Calculate sum using current divisor
    let sum = 0;

    for (let num of nums) {
      sum += Math.ceil(num / mid);
    }

    // Current divisor is valid
    if (sum <= threshold) {
      ans = mid; // Store answer
      high = mid - 1; // Try to find a smaller valid divisor
    }
    // Current divisor is too small
    else {
      low = mid + 1; // Move towards larger divisors
    }
  }

  return ans;
}

// Example
console.log(smallestDivisor([1, 2, 5, 9], 6)); // 5
