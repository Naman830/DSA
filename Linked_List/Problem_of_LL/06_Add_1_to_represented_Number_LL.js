/*
Imagine the linked list is a number written digit by digit.
1 → 2 → 3

means
123

After adding 1:
124

Output:
1 → 2 → 4

Key Observations
We add 1 only to the last digit.
If the last digit becomes 10, a carry is generated.
Carry keeps moving left until it becomes 0.
Singly linked lists cannot move backwards.
*/

// 1. Brute Force
/*
Idea Convert the linked list into a number, add 1, then create a new linked list.

Steps
Linked List
     ↓
Convert to Number
     ↓
+1
     ↓
Convert back to Linked List

Why it is bad?
Suppose
999999999999999999999999999999999

It won't fit inside normal integer types.
So this approach fails for very large numbers.
*/

// 2. Better Approach (Using Stack)
/*
Push all nodes into a stack.
Now pop from the stack (right to left).
This lets us process digits from the end.

Time: O(n)
Space: O(n)
*/

// There are 2 optimal Approach
// 1. (Reverse Linked List)
// Reverse the linked list so the last digit becomes the first.
// Add 1 while traversing from the new head,
// propagating any carry.
// Finally, reverse the list again to restore the original orde

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
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

// Add one to the linked list
function addOne(head) {
  // Step 1: Reverse the list
  head = reverse(head);

  let curr = head;
  let carry = 1;

  while (curr !== null && carry > 0) {
    let sum = curr.val + carry;

    curr.val = sum % 10;
    carry = Math.floor(sum / 10);

    // If carry remains and we're at the last node,
    // create a new node to continue propagation.
    if (carry > 0 && curr.next === null) {
      curr.next = new ListNode(0);
    }

    curr = curr.next;
  }

  // Step 2: Reverse again
  return reverse(head);
}

// Print linked list
function printList(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(" -> "));
}

// ---------- Test Case 1 ----------
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(9);

printList(head1);
head1 = addOne(head1);
printList(head1);

// ---------- Test Case 2 ----------
let head2 = new ListNode(9);
head2.next = new ListNode(9);
head2.next.next = new ListNode(9);

printList(head2);
head2 = addOne(head2);
printList(head2);

/*
	Time	                    Space
	O(2n because of reverse)	O(1)
*/
