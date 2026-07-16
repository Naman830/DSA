/*
Instead of storing original → copied node mapping in a HashMap,
we temporarily insert every copied node just after its original node.

Original List
1 → 2 → 3

After inserting copied nodes
1 → 1' → 2 → 2' → 3 → 3'

Now every copied node is immediately after its original node.
*/

/*
Algorithm

Insert copied node after every original node

Traverse again
    Connect random pointers

Traverse again
    Separate original and copied lists

Return copied head
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  // Edge case
  if (head === null) return null;

  //----------------------------------------------------
  // Step 1: Insert copied nodes after original nodes
  //----------------------------------------------------

  let curr = head;

  while (curr !== null) {
    // Create copy node
    const copy = new Node(curr.val);

    // Insert copy after original
    copy.next = curr.next;
    curr.next = copy;

    // Move to next original node
    curr = copy.next;
  }

  //----------------------------------------------------
  // Step 2: Assign random pointers
  //----------------------------------------------------

  curr = head;

  while (curr !== null) {
    // Current copy node
    const copy = curr.next;

    // If original has random pointer,
    // copied random will be original.random.next
    if (curr.random !== null) {
      copy.random = curr.random.next;
    }

    // Move to next original node
    curr = copy.next;
  }

  //----------------------------------------------------
  // Step 3: Separate original and copied lists
  //----------------------------------------------------

  curr = head;

  // Head of copied linked list
  const copyHead = head.next;

  while (curr !== null) {
    const copy = curr.next;

    // Restore original list
    curr.next = copy.next;

    // Connect copied list
    if (copy.next !== null) {
      copy.next = copy.next.next;
    }

    // Move to next original node
    curr = curr.next;
  }

  return copyHead;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n1.next = n2;
n2.next = n3;

n1.random = n3;
n2.random = n1;
n3.random = n2;

const clonedHead = copyRandomList(n1);

console.log(clonedHead.val); // 1
console.log(clonedHead.random.val); // 3
console.log(clonedHead.next.random.val); // 1
