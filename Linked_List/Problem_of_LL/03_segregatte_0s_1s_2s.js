/*
Sort a Linked List of 0's, 1's and 2's

Suppose the linked list is
1 -> 0 -> 2 -> 1 -> 2 -> 0 -> 1

After sorting
0 -> 0 -> 1 -> 1 -> 1 -> 2 -> 2
*/

// 1. Approach 1 : Brute Force (Counting)
/*
Algorithm

Traverse once
    count 0
    count 1
    count 2

Traverse again

while count0 > 0
    node.data = 0

while count1 > 0
    node.data = 1

while count2 > 0
    node.data = 2
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
class Solution {
  sortList(head) {
    if (head === null) return head;

    let zero = 0;
    let one = 0;
    let two = 0;

    let temp = head;

    // Count frequency
    while (temp !== null) {
      if (temp.value === 0) zero++;
      else if (temp.value === 1) one++;
      else two++;

      temp = temp.next;
    }

    temp = head;

    // Fill 0's
    while (zero > 0) {
      temp.value = 0;
      zero--;
      temp = temp.next;
    }

    // Fill 1's
    while (one > 0) {
      temp.value = 1;
      one--;
      temp = temp.next;
    }

    // Fill 2's
    while (two > 0) {
      temp.value = 2;
      two--;
      temp = temp.next;
    }

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

*/

/*
Time : O(2N or more due to running multiple loops )
Space : O(1)

Suppose interview says

"You are NOT allowed to modify node values."
Then this solution becomes invalid.
*/

// Approach 2 : Optimal (Rearranging Nodes)
// Instead of changing values,
// We'll create three separate linked lists

class Solution {
  sortListOptiml(head) {
    if (head === null || head.next === null) {
      return head;
    }

    // Dummy nodes
    let zeroDummy = new Node(-1);
    let oneDummy = new Node(-1);
    let twoDummy = new Node(-1);

    // Tail pointers
    let zero = zeroDummy;
    let one = oneDummy;
    let two = twoDummy;

    let current = head;

    while (current !== null) {
      if (current.value === 0) {
        zero.next = current;
        zero = zero.next;
      } else if (current.value === 1) {
        one.next = current;
        one = one.next;
      } else {
        two.next = current;
        two = two.next;
      }

      current = current.next;
    }

    // Connect the three lists
    zero.next = oneDummy.next !== null ? oneDummy.next : twoDummy.next;
    one.next = twoDummy.next;
    two.next = null;

    return zeroDummy.next;
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

let head = new Node(0);
head.next = new Node(0);
head.next.next = new Node(2);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(1);

const obj = new Solution();

console.log("Before:");
obj.print(head);

head = obj.sortListOptiml(head);

console.log("After:");
obj.print(head);

/*
Time : O(N)
Space : O(1)
*/
