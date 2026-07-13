// Similar as problem 09 in this --> After detecting it, we count how many nodes form the cycle.

// 1. Brute Force (HashSet)
// The repeated node is the starting point where counting begins.
// Traverse once around the loop until you reach that node again.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function lengthOfLoop(head) {
  const visited = new Set();

  let current = head;

  while (current !== null) {
    // Loop found
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

// Example
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create loop (5 -> 3)
head.next.next.next.next.next = head.next.next;

console.log(lengthOfLoop(head)); // 3

/*
| Case    | Time | Space |
| ------- | ---- | ----- |
| Best    | O(1) | O(1)  |
| Average | O(N) | O(N)  |
| Worst   | O(N) | O(N)  |

*/
