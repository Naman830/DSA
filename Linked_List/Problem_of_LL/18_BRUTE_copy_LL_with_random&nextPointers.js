// HASHMAP SOLUTION

/*
EXPLANATION: You are given a linked list where each node contains:
next → points to the next node.
random → points to any node in the list (or null).

TASK: Create a deep copy of the linked list.
Deep Copy: Create completely new nodes. The copied list should not share any node with the original list.

Key Observations:
Every original node must have a newly created node.
next pointers are easy to copy.
random pointers are difficult because they can point anywhere.
We need a way to quickly find the copied version of any original node.
*/

/*
Pseudocode

Create HashMap

Traverse list
    Create copy node
    Store original -> copy in map

Traverse again
    copy = map[original]

    copy.next = map[original.next]
    copy.random = map[original.random]

Return copy of head
*/

// Definition of Node
class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function copyRandomList(head) {}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);

n1.next = n2;
n2.next = n3;

n1.random = n3;
n2.random = n1;
n3.random = null;

const copiedHead = copyRandomList(n1);

console.log(copiedHead.val); // 1
console.log(copiedHead.random.val); // 3
console.log(copiedHead.next.random.val); // 1
