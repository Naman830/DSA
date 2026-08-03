class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null; // Head of linked list
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;

    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return "STACK IS EMPTY";
    }

    const removed = this.top.data;
    this.top = this.top.next;

    this.length--;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.top.data;
  }

  // Check whether stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Return stack size
  size() {
    return this.length;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }

    let current = this.top;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    console.log(result + "NULL");
  }
}

// ----------------------
// Example
// ----------------------

const stack = new Stack();

stack.push(10);
/*
Top
 |
 v
+------+------+
| 10   | NULL |
+------+------+
*/

stack.push(20);

/*
+------+------+
| 20   |      |---+
+------+------+   |
                  |
                  v
             +------+------+
             | 10   | NULL |
             +------+------+
*/
stack.push(30);

stack.print();
// 30 -> 20 -> 10 -> NULL

console.log(stack.peek());
// 30

console.log(stack.pop());
// 30

stack.print();
// 20 -> 10 -> NULL

console.log(stack.size());
// 2

console.log(stack.isEmpty());
// false
