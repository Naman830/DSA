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
    // Array to store stack elements
    this.items = [];
  }

  // Add an element to the top
  push(value) {
    this.items.push(value);
  }

  // Remove the top element
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }

    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }

    return this.items[this.items.length - 1];
  }

  // Check whether stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements
  size() {
    return this.items.length;
  }

  // Print all elements
  print() {
    console.log(this.items);
  }
}

// Testing ============================================================

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
