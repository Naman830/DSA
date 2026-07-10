class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  addTwoNumbers(head1, head2) {
    const dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    while (head1 !== null || head2 !== null || carry !== 0) {
      const value1 = head1 ? head1.value : 0;
      const value2 = head2 ? head2.value : 0;

      const sum = value1 + value2 + carry;

      carry = Math.floor(sum / 10);
      const digit = sum % 10;

      current.next = new Node(digit);
      current = current.next;

      if (head1) head1 = head1.next;
      if (head2) head2 = head2.next;
    }
    return dummy.next;
  }

  print(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" " + " -> "));
  }
}

const obj = new Solution();

// HEAD-1 342
const a = new Node(2);
a.next = new Node(4);
a.next.next = new Node(3);

// HEAD-2 465
const b = new Node(5);
b.next = new Node(6);
b.next.next = new Node(4);

const answer = obj.addTwoNumbers(a, b);
obj.print(answer);
