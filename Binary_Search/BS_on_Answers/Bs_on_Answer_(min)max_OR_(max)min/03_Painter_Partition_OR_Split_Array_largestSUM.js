/*
Painter's Partition and Split Array Largest Sum are direct applications of the Book Allocation problem.

Only the story and variable names change.
The Binary Search logic, search space (max → sum), and partition function remain exactly the same.
*/

/*
Split Array - Largest Sum

Same as Book Allocation.

Books      -> Array Elements
Students   -> Subarrays
Pages       -> Subarray Sum

Goal:
Split the array into exactly k contiguous subarrays
such that the largest subarray sum is as small as possible.
*/

// Returns how many subarrays are required if
// each subarray can have at most maxSum.
function countSubarrays(nums, maxSum) {
  let subarrays = 1; // First subarray
  let currentSum = 0;

  for (let num of nums) {
    // Add element to current subarray if possible
    if (currentSum + num <= maxSum) {
      currentSum += num;
    } else {
      // Otherwise start a new subarray
      subarrays++;
      currentSum = num;
    }
  }

  return subarrays;
}

function splitArray(nums, k) {
  // Search space
  let low = Math.max(...nums);
  let high = nums.reduce((sum, num) => sum + num, 0);

  let answer = -1;

  while (low <= high) {
    // Candidate largest subarray sum
    const mid = low + Math.floor((high - low) / 2);

    // Number of subarrays needed
    const subarraysNeeded = countSubarrays(nums, mid);

    if (subarraysNeeded <= k) {
      // Valid answer.
      // Try to minimize the largest subarray sum.
      answer = mid;
      high = mid - 1;
    } else {
      // Need a larger maximum sum.
      low = mid + 1;
    }
  }

  return answer;
}

// Example
const nums = [7, 2, 5, 10, 8];
const k = 2;

console.log(splitArray(nums, k)); // 18

/*
Time Complexity:
countSubarrays() -> O(n)
Binary Search -> O(log(sum - maxElement))

Overall:
O(n × log(sum - maxElement))

Space Complexity:
O(1)
*/
