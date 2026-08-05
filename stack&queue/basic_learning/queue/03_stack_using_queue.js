// Can you make the Queue behave exactly like a Stack?

/*
1. Initially Queue is Empty.
   Queue = []
   Size = 0

2. Queue follows FIFO.
   Push(10), Push(20)
   Queue = [10, 20]

3. But Stack follows LIFO.
   So after every push, rotate the queue.
   Queue = [20, 10]

4. Push(30)
   Queue = [20, 10, 30]

   Rotate again.
   Queue = [30, 20, 10]

5. Pop()
   Remove the front element (30).
   Queue = [20, 10]

   Since we always keep the latest element at the front,
   the queue behaves exactly like a stack.
*/

class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);
    let size = this.queue.length;

    while (size > 1) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  pop() {
    if (this.empty()) {
      return "Stack Underflow";
    }

    return this.queue.shift();
  }

  top() {
    if (this.empty()) {
      return "stack is empty";
    }
    // After every push, we rotate the queue so the newest element
    // (the stack's top) is always at the front of the queue.
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}

// ------------------ Test ------------------

const stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top()); // 30

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20

console.log(stack.top()); // 10

console.log(stack.empty()); // false

console.log(stack.pop()); // 10

console.log(stack.empty()); // true
