/*
Given an array of size n, find all elements that appear more than ⌊n/3⌋ times.
Maximum 2 elements can appear more than n/3 times

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]


For Majority Element I: Element appears more than n/2 times.

Imagine every majority candidate is fighting against other numbers.

Whenever three different numbers meet:
a
b
c
none of them can help become majority.

So we can cancel them out.
This is exactly the idea behind: Boyer-Moore Voting Algorithm (Extended)

We maintain:
candidate1
candidate2

count1
count2

Because there can be at most 2 majority elements.
*/

// 1. Brute Force Solution
/*
Pseudocode

ans = []

for each element
    count frequency

    if count > n/3
        add to answer
*/

// Time: O(n²) & Space: O(1)

function majorityElementBrute(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    if (count > Math.floor(nums.length / 3) && !result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(majorityElementBrute([1, 1, 1, 3, 3, 2, 2, 2]));

// Better Solution (HashMap)
/*
Idea
Store frequencies in a HashMap.

Steps
1. Count frequency of every number.
2. Traverse map.
3. Add elements whose frequency > n/3.
*/