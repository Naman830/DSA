class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  oddEvenList(head) {
    if (head === null || head.next === null) {
      return head;
    }
    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

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

const obj = new Solution();

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Before Rearranging:");
obj.print(head);

head = obj.oddEvenList(head);

console.log("After Rearranging:");
obj.print(head);
