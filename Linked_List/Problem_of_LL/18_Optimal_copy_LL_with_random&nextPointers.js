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

function copyRandomList(head) {}

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
