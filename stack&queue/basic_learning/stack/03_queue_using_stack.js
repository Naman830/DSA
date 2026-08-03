/*
Maintain two stacks:

stack1 → Used for inserting elements.
stack2 → Used for removing elements.
*/

class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      return "Queue is empty";
    }
    return this.stack2.pop();
  }

  front() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) {
      return "Queue is Empty";
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const queue = new QueueUsingStack();

// step 1:- Insert emelent in stack1 [Enqueue stack]

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
/*
Stack1          Stack2
|30 |
|20 |
|10 |           |   |
-----
*/

// Step 2:- We need to remove 10 because Queue follows FIFO.
// But the top of Stack1 is 30 ❌
// So we move everything to Stack2. [one by one]

/*
Stack1          Stack2
                |10 |  ← Top
                |20 |
                |30 |
                -----
*/

// STEP 3:- Now Pop from Stack2
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.dequeue()); // 20

queue.enqueue(40);

console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // 40
console.log(queue.isEmpty()); // true

/*
| Case        | Time                                                         | Space |
| ----------- | ------------------------------------------------------------ | ----- |
| **Enqueue** | Best: **O(1)** Average: **O(1)** Worst: **O(1)**             | O(1)  |
| **Dequeue** | Best: **O(1)** Average (Amortized): **O(1)** Worst: **O(n)** | O(n)  |

*/
