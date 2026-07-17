/*
You are given a special linked list where:

Each node has:
next → points to the next node in the same row.
bottom → points to another sorted linked list.

The goal is to convert all these small sorted linked lists into one single sorted linked list using only the bottom pointer.

next →
5 ------> 10 ------> 19 ------> 28
|          |          |          |
7          20         22         35
|                     |          |
8                     50         40
|                                |
30                               45


5
|
7
|
8
|
10
|
19
|
20
|
22
|
28
|
30
|
35
|
40
|
45
|
50


1. Key Observations
Every bottom list is already sorted.
We need one final sorted list.
This is very similar to Merge K Sorted Lists.
Since each list is sorted, we can merge two sorted lists repeatedly.
*/

// BRUTE FORCE SOLUTION
/*
Traverse every linked list.
Push all values into an array.
Sort the array.
Create a new bottom linked list.


Time Complexity
Collect nodes → O(N)
Sorting → O(N log N)
Creating list → O(N)

Overall: O(N log N)
Space: O(N)
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

// Flatten Function
function flatten(head) {
  // Array to store all node values
  const values = [];

  // Traverse all linked lists
  let current = head;

  while (current !== null) {
    let temp = current;

    // Traverse bottom list
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.bottom;
    }

    // Move to next list
    current = current.next;
  }

  // Sort all values
  values.sort((a, b) => a - b);

  // Dummy node to build new list
  const dummy = new Node(-1);
  let tail = dummy;

  // Create new bottom linked list
  for (let value of values) {
    tail.bottom = new Node(value);
    tail = tail.bottom;
  }

  return dummy.bottom;
}

// Print Bottom List
function printBottom(head) {
  let temp = head;

  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.bottom;
  }

  console.log();
}

/* ---------- Sample Input ---------- */

// List 1
let head = new Node(5);
head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

// List 2
head.next = new Node(10);
head.next.bottom = new Node(20);

// List 3
head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.bottom.bottom = new Node(50);

// List 4
head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);
head.next.next.next.bottom.bottom = new Node(40);
head.next.next.next.bottom.bottom.bottom = new Node(45);

// Flatten
const result = flatten(head);

// Output
printBottom(result);

// Output:
// 5 7 8 10 19 20 22 28 30 35 40 45 50
