/*
EXPLANATION :-
You are given two linked lists where each node contains a single digit
The digits are stored in reverse order.

Example:
List 1: 2 → 4 → 3
List 2: 5 → 6 → 4

These actually represent the numbers:
342
+
465
----
807

The answer should also be stored in reverse order.
7 → 0 → 8

Key Observations
Every node contains one digit (0-9).
Addition is performed exactly like we do on paper.
We must keep track of the carry.
The linked lists can have different lengths.
If a carry remains after the last nodes, create one more node.
*/

/*
1. Brute Force Approach

Convert both linked lists into integers, add them, then convert the result back into a linked list.

Why isn't this good?
If the linked list contains 100 digits, JavaScript's Number cannot store it safely.

So this solution fails for very large inputs.
*/

// 2. Optimal Approach
/*
Problem:
Add two numbers represented by linked lists.
Digits are stored in reverse order.

Example:
2 -> 4 -> 3
5 -> 6 -> 4

Output:
7 -> 0 -> 8
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  addTwoNumbers(head1, head2) {
    // Dummy node makes insertion easier
    const dummy = new Node(0);

    let current = dummy;
    let carry = 0;

    // Continue while any list has nodes or carry exists
    while (head1 !== null || head2 !== null || carry !== 0) {
      // Take values from both lists
      const value1 = head1 ? head1.value : 0;
      const value2 = head2 ? head2.value : 0;

      // Add values with carry
      const sum = value1 + value2 + carry;

      // New carry
      carry = Math.floor(sum / 10);

      // Digit to store
      const digit = sum % 10;

      // Create new node
      current.next = new Node(digit);

      // Move current pointer
      current = current.next;

      // Move both linked lists if possible
      if (head1) head1 = head1.next;
      if (head2) head2 = head2.next;
    }

    return dummy.next;
  }

  print(head) {
    let current = head;

    while (current) {
      process.stdout.write(current.value + " ");
      current = current.next;
    }

    console.log();
  }
}

// -------- Test --------

const s = new Solution();

// First number: 342
const a = new Node(2);
a.next = new Node(4);
a.next.next = new Node(3);

// Second number: 465
const b = new Node(5);
b.next = new Node(6);
b.next.next = new Node(4);

const answer = s.addTwoNumbers(a, b);

s.print(answer);

// Output:
// 7 0 8
