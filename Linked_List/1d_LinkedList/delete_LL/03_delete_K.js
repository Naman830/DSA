/*
Linked List:
10 → 20 → 30 → 40 → 50 → null

k = 3
Delete the 3rd node (30)

Output:
10 → 20 → 40 → 50 → null

2. Key Observations
Linked lists don't support direct indexing like arrays.
To delete a node, we need access to the previous node.
Special case:
If k = 1, simply delete the head.
If k is greater than the length of the list, nothing should happen (or return the original list).
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // Delete kth node
  deleteKth(head, k) {
    // Empty list
    if (head === null) {
      return null;
    }

    // Delete head
    if (k === 1) {
      return head.next;
    }

    let current = head;
    let count = 1;

    // Reach the (k-1)th node
    while (current !== null && count < k - 1) {
      current = current.next;
      count++;
    }

    // If k is greater than length
    if (current === null || current.next === null) {
      return head;
    }

    // Skip the kth node
    current.next = current.next.next;

    return head;
  }

  // Print linked list
  print(head) {
    let current = head;
    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// --------------------
// Test
// --------------------

const list = new LinkedList();

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

console.log("Before:");
list.print(head);

head = list.deleteKth(head, 3);

console.log("After:");
list.print(head);

/*
| Case    | Complexity              |
| ------- | ----------------------- |
| Best    | **O(1)** (when `k = 1`) |
| Average | **O(k)**                |
| Worst   | **O(n)**                |


SC: O(1)
*/
