// Goal: Given a linked list that contains a cycle, return the node where the cycle begins. If there is no cycle, return null.

/*
Key Observations
If there is no cycle, answer is null.
First detect whether a cycle exists.
Then find the first node where the cycle starts.
We should solve it in O(N) time and O(1) space.
*/

// 1. Brute (hashmap)

/*
Problem:
Find the starting node of a loop in a linked list.
Return null if no loop exists.

| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(1) | O(1)  |
| Average | O(N) | O(N)  |
| Worst   | O(N) | O(N)  |

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectCycle(head) {
  const visited = new Set();

  let current = head;

  while (current !== null) {
    if (visited.has(current)) {
      return current; // starting node
    }

    visited.add(current);
    current = current.next;
  }

  return null;
}

function detectCycleOptimal(head) {
  let slow = head;
  let fast = head;

  // Step 1: Detect if a cycle exists
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // Cycle detected
    if (slow === fast) {
      // Step 2: Move slow to the head
      slow = head;

      // Step 3: Move both one step at a time
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      // Both pointers meet at the start of the cycle
      return slow;
    }
  }

  // No cycle
  return null;
}

// Example
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Create loop
head.next.next.next.next.next = head.next.next;

console.log(detectCycleOptimal(head).val); // 3

// 2. Optimal Approach (Floyd's Cycle Detection)
// step 1. Detect that there is a loop
// step 2. Move the slow pointer to head and move one by one slow and fast and when they collide that is our starting point
