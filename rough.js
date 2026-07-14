class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycleOptimal(head) {
  const visited = new Set();
  let current = head;

  while (current !== null) {
    if (visited.has(current)) {
      let start = current;
      let count = 1;
      let temp = current.next;

      while (temp !== start) {
        count++;
        temp = temp.next;
      }
      return count;
    }
    visited.add(current);
    current = current.next;
  }
  return 0;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create loop (5 -> 3)
head.next.next.next.next.next = head.next.next;

console.log(hasCycleOptimal(head)); // 3
