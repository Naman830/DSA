// You have to find the element that appears more than n / 2 times, where n is the size of the array.
// frequency of element > n / 2

/*
Why Can There Be Only One Majority Element?

A very important interview point.
Can two elements both appear more than n / 2 times?

No.

Example:
If array size is 10,

Majority element must appear more than 5 times.

Suppose:
A appears 6 times
B appears 6 times

Total would become:
6 + 6 = 12

But array size is only 10.
Impossible.

So there can be only one majority element.
*/

// Approach 1: Brute Force
// For every element, count how many times it appears in the whole array.
// If its count is greater than n / 2, return it.

/*
Pseudo Code

for i from 0 to n - 1:
    count = 0

    for j from 0 to n - 1:
        if nums[j] == nums[i]:
            count++

    if count > n / 2:
        return nums[i]
*/

// TC: O(n2) and SC O(1)

function majorityElementBrute(nums) {
  let n = nums.length;

  // Pick every element one by one
  for (let i = 0; i < n; i++) {
    let count = 0;

    // Count how many times nums[i] appears in the array
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }

    // If frequency is more than half of array size
    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }

  // If majority element does not exist
  return -1;
}

// Approach 2: Better Solution Using Hash Map
// Instead of counting again and again, store frequency of every element.
// We use a hash map/object.

/*
Pseudo Code

create empty map

for each element in nums:
increase its frequency in map

for each key in map:
if frequency > n / 2:
return key
*/

// Time: O(n) & Space: O(n)

function majorityElementBetter(nums) {
  let n = nums.length;

  // Map will store element frequency
  let map = new Map();

  // Count frequency of every element
  for (let i = 0; i < n; i++) {
    let num = nums[i];

    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // Check which element appears more than n / 2 times
  for (let [key, value] of map) {
    if (value > Math.floor(n / 2)) {
      return key;
    }
  }

  // If majority element does not exist
  return -1;
}

console.log(majorityElementBetter([2, 2, 1, 1, 1, 2, 2]));


// Approach 3: Optimal Solution Moore’s Voting Algorithm

/*
Imagine elements are voting.
Majority element has more votes than all other elements combined.
So even if majority element gets cancelled with other elements, it will still survive at the end.

We maintain two variables:
candidate: The current possible majority element.
count: The power/vote count of the candidate.
*/

/*
Pseudo Code

candidate = null
count = 0

for each num in nums:
    if count == 0:
        candidate = num
        count = 1
    else if num == candidate:
        count++
    else:
        count--

return candidate
*/