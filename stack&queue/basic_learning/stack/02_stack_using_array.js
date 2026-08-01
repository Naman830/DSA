/*
=====================================
        Stack using Array
=====================================

Operations:
1. push()     -> Add element
2. pop()      -> Remove top element
3. peek()     -> Get top element
4. isEmpty()  -> Check if stack is empty
5. size()     -> Get number of elements
6. print()    -> Display stack
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  // Add element to top
  push(value) {
    this.stack.push(value);
  }

  // Remove top element
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }

    return this.stack.pop();
  }

  // Return top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.stack[this.stack.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Number of elements
  size() {
    return this.stack.length;
  }

  // Print stack
  print() {
    console.log(this.stack);
  }
}

// ---------------- Test ----------------

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // [10, 20, 30]

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30

stack.print(); // [10, 20]

console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
/*
| Operation | Best | Average | Worst |
| --------- | ---- | ------- | ----- |
| push()    | O(1) | O(1)    | O(1)  |
| pop()     | O(1) | O(1)    | O(1)  |
| peek()    | O(1) | O(1)    | O(1)  |
| isEmpty() | O(1) | O(1)    | O(1)  |
| size()    | O(1) | O(1)    | O(1)  |
*/
