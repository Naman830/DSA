/*
EXPLANATION:-

The problem is NOT about odd and even values.
It is about odd and even positions (indices) of nodes.
For example,

Input:
1 → 2 → 3 → 4 → 5

Positions:
1st  2nd  3rd  4th  5th

Odd Position Nodes:
1 → 3 → 5

Even Position Nodes:
2 → 4

Output:
1 → 3 → 5 → 2 → 4

Notice:
Node values don't matter.
Only their positions matter.

Key Observations
We must rearrange nodes.
Do not create new nodes.
Maintain the relative order of odd nodes.
Maintain the relative order of even nodes.
Use O(1) extra space.
*/

/*
1. BRUTE FORCE APPROACH
/*
LeetCode 328 - Odd Even Linked List (Brute Force)

Approach:
1. Traverse the linked list.
2. Store odd-position nodes in one array.
3. Store even-position nodes in another array.
4. Connect all odd nodes together.
5. Connect all even nodes together.
6. Attach the even list after the odd list.
*/

/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  oddEvenList(head) {
    // If the list is empty or has only one node
    if (head === null || head.next === null) {
      return head;
    }

    const oddNodes = [];
    const evenNodes = [];

    let current = head;
    let position = 1;

    // Traverse the linked list
    while (current !== null) {
      if (position % 2 === 1) {
        // Store odd-position node
        oddNodes.push(current);
      } else {
        // Store even-position node
        evenNodes.push(current);
      }

      current = current.next;
      position++;
    }

    // Connect all odd nodes
    for (let i = 0; i < oddNodes.length - 1; i++) {
      oddNodes[i].next = oddNodes[i + 1];
    }

    // Connect all even nodes
    for (let i = 0; i < evenNodes.length - 1; i++) {
      evenNodes[i].next = evenNodes[i + 1];
    }

    // Connect the last odd node [from last] to the even node [first of even node]
    oddNodes[oddNodes.length - 1].next =
      evenNodes.length > 0 ? evenNodes[0] : null;

    // Last even node should point to null
    if (evenNodes.length > 0) {
      evenNodes[evenNodes.length - 1].next = null;
    }

    return oddNodes[0];
  }

  // Print Linked List
  print(head) {
    let current = head;
    let result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// ----------------------
// Test Case
// ----------------------

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const obj = new Solution();

console.log("Before Rearranging:");
obj.print(head);

head = obj.oddEvenList(head);

console.log("After Rearranging:");
obj.print(head);


*/

// TC: O(n) && SC: O(n)

// 2. Optimal Approach
/*
EXPLANATION:-

Instead of creating new lists, we'll rearrange the existing pointers.

We'll maintain:
odd
even
evenHead

Why?
Because after finishing the odd list,

Odd List
↓
1 → 3 → 5

Even List
↓
2 → 4

Finally,
5.next = evenHead
Done.
*/

/*
Pseudocode

if head is null
    return head

odd = head
even = head.next
evenHead = even

while even != null AND even.next != null

    odd.next = even.next
    odd = odd.next

    even.next = odd.next
    even = even.next

odd.next = evenHead
return head
*/

/*
LeetCode 328 - Odd Even Linked List

Rearrange the linked list so that:
1st node -> 3rd node -> 5th node -> ...
followed by
2nd node -> 4th node -> 6th node -> ...

Only node positions matter, not node values.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  oddEvenList(head) {
    // Empty list or single node
    if (head === null || head.next === null) {
      return head;
    }

    // Initialize odd and even pointers
    let odd = head;
    let even = head.next;

    // Save the head of even list
    const evenHead = even;

    // Rearrange pointers
    while (even !== null && even.next !== null) {
      /*
      becomes --> 1.next = 3;

        Now the list looks like
          1 → 3 → 4 → 5 → 6
          2 → 3 → 4 → 5 → 6
      */
      odd.next = even.next;

      /*
Before

odd
 ↓
1 → 3

After
      odd
       ↓
1 → 3 → 4 → 5

Why move odd?
Because 3 is now the last node in the odd list.
*/
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    // Connect odd list with even list
    odd.next = evenHead;

    return head;
  }

  print(head) {
    let current = head;
    let result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// Test Case
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const obj = new Solution();

console.log("Before:");
obj.print(head);

head = obj.oddEvenList(head);

console.log("After:");
obj.print(head);

// TC: O(n) && SC: O(1)
