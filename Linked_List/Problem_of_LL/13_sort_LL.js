/*
You are given the head of a singly linked list.
Your task is to sort the linked list in ascending order and return the new head.

Key Observations
Arrays can be sorted easily because we have random access.
Linked Lists don't allow random access.
Algorithms like Quick Sort are not ideal for Linked Lists.
Merge Sort is the best sorting algorithm for Linked Lists.

Why?
Because Merge Sort only needs sequential access.
*/

// Approach 1 — Brute Force
/*
Traverse the linked list.
Store every value inside an array.
Sort the array.
Traverse the linked list again.

Replace every node's value.
We're not changing nodes, only changing values.
*/
/*
Pseudocode

Take all values into array
Sort array
Traverse linked list
Replace values one by one
*/

/*
Problem:
Sort a Linked List using Brute Force

Approach:
1. Traverse the linked list and store all values in an array.
2. Sort the array.
3. Traverse the linked list again and replace node values.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create Linked List from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Print Linked List
function printLinkedList(head) {
  let current = head;
  const result = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

// Brute Force Sorting
function sortLinkedList(head) {
  if (!head || !head.next) return head;

  const values = [];

  // Step 1: Store all node values
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  // Step 2: Sort the array
  values.sort((a, b) => a - b);

  // Step 3: Put sorted values back into the linked list
  current = head;
  let index = 0;

  while (current) {
    current.val = values[index];
    index++;
    current = current.next;
  }

  return head;
}

// --------------------
// Test Case 1
// --------------------
let head1 = createLinkedList([4, 2, 1, 3]);

console.log("Before Sorting:");
printLinkedList(head1);

head1 = sortLinkedList(head1);

console.log("After Sorting:");
printLinkedList(head1);

// --------------------
// Test Case 2
// --------------------
let head2 = createLinkedList([-1, 5, 3, 4, 0]);

console.log("\nBefore Sorting:");
printLinkedList(head2);

head2 = sortLinkedList(head2);

console.log("After Sorting:");
printLinkedList(head2);

// TC: O(n log n)
// SC: O(n)
