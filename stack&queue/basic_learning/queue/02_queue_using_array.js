/*
Queue using Array

Operations:
1. enqueue(value) -> Add element at the rear
2. dequeue()      -> Remove element from the front
3. front()        -> Get first element
4. isEmpty()      -> Check if queue is empty
5. size()         -> Number of elements
*/

class Queue {
  constructor() {
    this.queue = [];
  }

  // Add element at the end
  enqueue(value) {
    this.queue.push(value);
  }

  // Remove element from the front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }

    return this.queue.shift();
  }

  // Get front element
  front() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }

    return this.queue[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Return size of queue
  size() {
    return this.queue.length;
  }

  // Print queue
  print() {
    console.log(this.queue);
  }
}

// ------------------ Test ------------------

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print(); // [10, 20, 30]

console.log(q.front()); // 10
console.log(q.dequeue()); // 10

q.print(); // [20, 30]

console.log(q.size()); // 2
console.log(q.isEmpty()); // false
