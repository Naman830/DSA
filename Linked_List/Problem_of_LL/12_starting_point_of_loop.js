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

// Example
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Create loop
head.next.next.next.next.next = head.next.next;

console.log(detectCycle(head).val); // 3
