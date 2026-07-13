/*
If the linked list has an odd number of nodes, there is only one middle node.

If the linked list has an even number of nodes, most interview questions (including LeetCode 876) ask you to return the second middle node.
*/

// Approach 1 — Brute Force (Count Nodes)
/*
First count the total number of nodes.
Once we know the length, calculate

middle = Math.floor(length / 2)

Then traverse again until that index.
So this requires two traversals.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function middleNode(head) {
  // Count total nodes
  let count = 0;
  let temp = head;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  // Find middle index
  let middle = Math.floor(count / 2);

  // Traverse again
  temp = head;

  while (middle > 0) {
    temp = temp.next;
    middle--;
  }

  return temp;
}

function middleNodeOptimal(head) {
  // Initialize both pointers at the head
  let slow = head;
  let fast = head;

  // Move slow by 1 step and fast by 2 steps
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Slow now points to the middle node
  return slow;
}

// Test
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

console.log(middleNodeOptimal(head).val); // 4

/*
| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(2N) | O(1)  |
| Average | O(2N) | O(1)  |
| Worst   | O(2N) | O(1)  |
*/

// Approach 2 — Optimal (Slow & Fast Pointer)
/*
Instead of counting nodes, use two pointers.

Slow pointer moves 1 step at a time.
Fast pointer moves 2 steps at a time.

Since the fast pointer moves twice as quickly, by the time it reaches the end of the list, the slow pointer will have covered only half the distance—placing it exactly at the middle.

| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(N) | O(1)  |
| Average | O(N) | O(1)  |
| Worst   | O(N) | O(1)  |

*/
