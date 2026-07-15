/*
You are given the head of a linked list and an integer k
Your task is to rotate the linked list to the right by k positions.

When we rotate once to the right:
The last node becomes the first node and Everything else shifts one position to the right.

Input:
1 → 2 → 3 → 4 → 5
k = 2

Rotate once:
5 → 1 → 2 → 3 → 4

Rotate twice:
4 → 5 → 1 → 2 → 3

Output:
4 → 5 → 1 → 2 → 3
*/

// 1. Brute Force Approach
/*
Rotate the list one step at a time.

For every rotation:

Find the last node.
Find the second last node.
Disconnect the last node.
Put it before the head.

Repeat this k times.

Pseudocode
Repeat k times

    Find last node
    Find second last node

    secondLast.next = null

    last.next = head

    head = last
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 0;
  let temp = head;

  while (temp) {
    length++;
    temp = temp.next;
  }

  k = k % length;

  while (k--) {
    let previous = null;
    let current = head;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    current.next = head;
    head = current;
  }
  return head;
}

function rotateRightOptimal(head, k) {
  // Edge cases
  if (!head || !head.next || k === 0) return head;

  // Step 1: Find length and last node
  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Reduce unnecessary rotations
  k = k % length;

  if (k === 0) return head;

  // Step 3: Make the list circular
  tail.next = head;

  // Step 4: Find the new tail
  let stepsToNewTail = length - k - 1;
  let newTail = head;

  while (stepsToNewTail--) {
    newTail = newTail.next;
  }

  // Step 5: New head is next node
  let newHead = newTail.next;

  // Step 6: Break the circle
  newTail.next = null;

  return newHead;
}

// ---------- Helper Functions ----------
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let ans = rotateRightOptimal(head, 2);

printList(ans);

// Output:
// 4 -> 5 -> 1 -> 2 -> 3

/*
| Case    | Time     |
| ------- | -------- |
| Best    | O(n)     |
| Average | O(n × k) |
| Worst   | O(n × k) |
SC: O(1)
 */

// 2. Optimal Approach
// Instead of rotating one by one, first compute the list length. Connect the last node back to the head to form a circular linked list. Then find the new tail and break the circle at the correct position to get the rotated list.

/*
Pseudocode
Find length

k = k % length

If k == 0

    return head

Connect last node to head

Find newTail at

length - k - 1

newHead = newTail.next

Break circle

return newHead

| Case    | Time     | Space    |
| ------- | -------- | -------- |
| Best    | **O(n)** | **O(1)** |
| Average | **O(n)** | **O(1)** |
| Worst   | **O(n)** | **O(1)** |

*/
