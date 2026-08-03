class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (!this.front) {
      return "QUEUE IS EMPTY";
    }
    const removed = this.front.data;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return removed;
  }

  peek() {
    if (!this.front) {
      return "Queue is empty";
    }

    return this.front.data;
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Print queue
  print() {
    let current = this.front;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

// Test Cases
const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print(); // 10 -> 20 -> 30 -> null

console.log(q.dequeue()); // 10

q.print(); // 20 -> 30 -> null

console.log(q.peek()); // 20

console.log(q.isEmpty()); // false

console.log(q.dequeue()); // 20
console.log(q.dequeue()); // 30

console.log(q.isEmpty()); // true
