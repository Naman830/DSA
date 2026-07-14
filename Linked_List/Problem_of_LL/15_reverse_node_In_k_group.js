/*
EXPLANATION
You are given the head of a linked list and an integer k.
Reverse every group of k nodes.
If the last group contains fewer than k nodes, leave it as it is

Input:
1 → 2 → 3 → 4 → 5
k = 2

Output:
2 → 1 → 4 → 3 → 5

Explanation

(1,2) -> reverse -> (2,1)

(3,4) -> reverse -> (4,3)

(5) -> less than k
don't reverse
*/

/*
Key Observations
Reverse only groups having exactly k nodes.
Remaining nodes (< k) stay unchanged.
Need to reconnect reversed groups.
Linked list must remain connected after every reversal.
*/

// ===========================================================================
// ===========================================================================
// ===========================================================================

/*
Brute Force
Store nodes in an array.
Reverse every k-sized portion.
Rebuild the linked list.

Uses extra space.
*/

// ===========================================================================
// ===========================================================================
// ===========================================================================

// OPTIMAL SOLUTION
// 1. Find k nodes.
// 2. Reverse them.
// 3. Connect previous group with current reversed group.

/*
Before reverse
prevGroup
    |
    V

1 → 2 → 3 → 4 → 5 → 6
^         ^
|         |
curr    kthNode

After reverse
3 → 2 → 1 → 4 → 5 → 6

Reconnect: prevGroup.next = 3
1.next = 4

Move
curr = 4

Repeat.
*/

/*
Pseudocode
dummy -> head

prevGroup = dummy
curr = head

while curr exists

    kth = find kth node

    if kth == null
         break

    nextGroup = kth.next

    disconnect group

    reverse group

    connect previous group

    connect reversed tail with nextGroup

    move prevGroup

    move curr

return dummy.next
*/

/**
 * Problem:
 * Reverse every group of k nodes in a linked list.
 * If remaining nodes are fewer than k, leave them unchanged.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Find the kth node starting from current node
function getKthNode(curr, k) {
  while (curr !== null && k > 1) {
    curr = curr.next;
    k--;
  }

  return curr;
}

// Reverse a linked list
function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

function reverseKGroup(head, k) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prevGroup = dummy;
  let curr = head;

  while (curr !== null) {
    // Find kth node
    let kthNode = getKthNode(curr, k);

    // Less than k nodes left
    if (kthNode === null) break;

    // Save next group's starting node
    let nextGroup = kthNode.next;

    // Break current group
    kthNode.next = null;

    // Reverse current group
    let reversedHead = reverse(curr);

    // Connect previous group
    prevGroup.next = reversedHead;

    // Current becomes tail after reversing
    curr.next = nextGroup;

    // Move prevGroup to current tail
    prevGroup = curr;

    // Start next group
    curr = nextGroup;
  }

  return dummy.next;
}

// Helper: create linked list
function createList(arr) {
  let dummy = new ListNode(0);
  let temp = dummy;

  for (let num of arr) {
    temp.next = new ListNode(num);
    temp = temp.next;
  }

  return dummy.next;
}

// Helper: print linked list
function printList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(" -> "));
}

// Test Case
let head = createList([1, 2, 3, 4, 5]);

let ans = reverseKGroup(head, 2);

printList(ans);

// Output:
// 2 -> 1 -> 4 -> 3 -> 5

// TC: O(N)
// SC: O(1)
