/*
A number is a leader if no bigger number exists after it.

arr = [16, 17, 4, 3, 5, 2]

16 → right side has 17, so 16 is not leader
17 → right side has 4, 3, 5, 2. All are smaller, so 17 is leader
4  → right side has 5, so 4 is not leader
3  → right side has 5, so 3 is not leader
5  → right side has 2, so 5 is leader
2  → nothing on right side, so last element is always leader

Key Rule:
The last element is always a leader, because there is no element on its right.
*/

// 1. Brute Force Approach

// For every element, check all elements on its right side.
// If no element on the right is greater than current element, then current element is a leader.

/*
Pseudo Code

leaders = []

for i from 0 to n - 1:
    isLeader = true

    for j from i + 1 to n - 1:
        if arr[j] > arr[i]:
            isLeader = false
            break

    if isLeader == true:
        add arr[i] into leaders

return leaders
*/

// TC: O(n^2) & SC: O(n)

function leadersInArray(arr) {
  let n = arr.length;
  let leaders = [];

  // Pick every element one by one
  for (let i = 0; i < n; i++) {
    let isLeader = true;

    // Check all elements on the right side
    for (let j = i + 1; j < n; j++) {
      // If any element on right is greater,
      // then arr[i] cannot be a leader
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }

    // If no greater element found on right side
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}


//2. Optimal Approach
// Instead of checking right side again and again, we move from right to left.

/*
Pseudo Code

leaders = []
maxRight = -infinity

for i from n - 1 to 0:
    if arr[i] >= maxRight:
        add arr[i] into leaders
        maxRight = arr[i]

reverse leaders

return leaders
*/

function leadersInArray(arr) {
  let n = arr.length;
  let leaders = [];

  // This will store the maximum element seen from the right side
  let maxRight = -Infinity;

  // Traverse the array from right to left
  for (let i = n - 1; i >= 0; i--) {
    // If current element is greater than or equal to all elements on right,
    // then it is a leader
    if (arr[i] >= maxRight) {
      leaders.push(arr[i]);

      // Update maxRight because current element is now the biggest seen so far
      maxRight = arr[i];
    }
  }

  // We collected leaders from right to left,
  // so reverse them to get correct left-to-right order
  leaders.reverse();

  return leaders;
}

console.log(leadersInArrayOptimal([16, 17, 4, 3, 5, 2]));
// Output: [17, 5, 2]
