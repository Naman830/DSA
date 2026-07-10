/*
You are given an array nums containing n + 1 integers.

Every number is between 1 and n (inclusive).
There is only one duplicate number.
That duplicate number may appear more than twice.

Your task is to return the duplicate number without modifying the array.
*/

// 1. Brute Force Approach
// For every element, count how many times it appears.
// If any count becomes greater than 1, return that element.

/*
Time : O(n²)
Space : O(1)
*/

function findDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > 1) {
      return nums[i];
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// 2. Better Approach (Hash Set)
// Keep inserting numbers into a Set.
// Before inserting, check if it already exists.
// If yes, that's the duplicate.

/*
Time : O(n)
Space : O(n)
*/

function findDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// 2. Optimal Approach (Floyd's Tortoise and Hare - Cycle Detection)
// Think of every array index as a node and every value as a pointer to the next node.

/*
Example
nums = [1,3,4,2,2]

Let's draw it.

Index : 0 1 2 3 4
Value : 1 3 4 2 2

Connections become
0 → 1
1 → 3
3 → 2
2 → 4
4 → 2

Visual

0
|
v
1
|
v
3
|
v
2 --->4
^     |
|_____|

Notice

2 → 4 → 2 → 4 → 2 ...

A cycle is formed.
The duplicate number is exactly where the cycle begins.

WHY EVERYTIME WE GOT CYCLE
Every value is between 1 and n.
That means every value points to another valid index.
Since there are n + 1 positions but only n possible destinations, some node must be reached more than once, creating a cycle.
*/

// Floyd's Algorithm
/*
Use two pointers.

Slow Pointer
Moves one step.
slow = nums[slow]

Fast Pointer
Moves two steps.
fast = nums[ nums[fast] ]

Eventually they meet inside the cycle.

Phase 2
Move one pointer back to the beginning.
Now both move one step.
Where they meet again is the duplicate number.
 */
