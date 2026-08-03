/*
Whenever we want to dequeue, we keep popping elements recursively until only one element remains.

That last remaining element is actually the front of the queue.

After removing it, we push back every previous element while returning from recursion.
*/
class Queue {
  constructor() {
    this.stack = [];
  }

  // Add element to queue
  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    if (this.stack.length === 0) {
      return "QUEUE IS EMPTY";
    }

    if (this.stack.length === 1) {
      return this.stack.pop();
    }

    const top = this.stack.pop();
    const front = this.dequeue();

    this.stack.push(top);
    return top;
  }

  // Show queue
  display() {
    console.log([...this.stack].reverse());
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.display();

console.log(q.dequeue()); // 10

q.display();

console.log(q.dequeue()); // 20

q.display();

// TC: O(n) && SC: O(n)
