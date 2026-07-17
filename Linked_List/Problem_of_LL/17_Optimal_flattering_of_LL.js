/*
Instead of sorting everything,
Since every bottom list is already sorted, we merge them just like Merge Sort.
We recursively flatten from the right side.
*/

/*
Pseudocode
flatten(head)

if head == null OR head.next == null
    return head

right = flatten(head.next)

head = merge(head, right)

return head

*/

/*
Merge Pseudocode
merge(list1, list2)

dummy

while both exist
    smaller node becomes next
attach remaining nodes

return dummy.bottom
*/

// Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}
function merge(list1, list2) {
  // Dummy node simplifies merging
  const dummy = new Node(-1);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      tail.bottom = list1;
      list1 = list1.bottom;
    } else {
      tail.bottom = list2;
      list2 = list2.bottom;
    }

    tail = tail.bottom;

    // Remove next pointer because final list uses only bottom
    tail.next = null;
  }

  // Attach remaining nodes
  if (list1 !== null) {
    tail.bottom = list1;
  } else {
    tail.bottom = list2;
  }

  return dummy.bottom;
}

/*
Flatten Function
*/
function flatten(head) {
  // Base Case
  if (head === null || head.next === null) {
    return head;
  }

  // Flatten all lists on the right
  head.next = flatten(head.next);

  // Merge current list with flattened right side
  head = merge(head, head.next);

  return head;
}

// Print Bottom Linked List
function printBottom(head) {
  let temp = head;

  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.bottom;
  }

  console.log();
}
/* ---------- Sample Input ---------- */
// List 1
let head = new Node(5);
head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

// List 2
head.next = new Node(10);
head.next.bottom = new Node(20);

// List 3
head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.bottom.bottom = new Node(50);

// List 4
head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);
head.next.next.next.bottom.bottom = new Node(40);
head.next.next.next.bottom.bottom.bottom = new Node(45);

// Flatten
const result = flatten(head);

// Output
printBottom(result);

// Output:
// 5 7 8 10 19 20 22 28 30 35 40 45 50
