/*
.Key Observations (Short)
Stack follows LIFO.
Finding the minimum by scanning the stack takes O(n).
We need O(1) for every operation.
Store the minimum while pushing elements.
*/

// OPTIMAL APPROACH (TWO STACKS)
/*
Main Stack → stores all values.
Min Stack → stores the minimum value at every step.

Whenever we push a new number: FORMULA
    new Minimum = min(current Minimum, new Value)
*/

class MinStack {
  constructor() {
    // Stores all values
    this.stack = [];

    // Stores minimum value till each position
    this.minStack = [];
  }

  // Push element into stack
  push(val) {
    this.stack.push(val);
    // If minStack is empty, first element is minimum
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      // Store the smaller value
      const currentMin = Math.min(val, this.getMin());
      this.minStack.push(currentMin);
    }
  }

  // Remove top element
  pop() {
    if (this.stack.length === 0) return null;

    this.minStack.pop();
    return this.stack.pop();
  }

  // Return top element
  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  // Return current minimum
  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

// ----------------------
// Test Cases
// ----------------------

const minStack = new MinStack();

minStack.push(5);
console.log(minStack.getMin()); // 5

minStack.push(2);
console.log(minStack.getMin()); // 2

minStack.push(8);
console.log(minStack.getMin()); // 2

minStack.push(1);
console.log(minStack.getMin()); // 1

/*
newMinimum = min(newValue,currentMinimum)

| New Value | Previous Minimum | Stored |
| --------- | ---------------- | ------ |
| 5         | ∞                | 5      |
| 2         | 5                | 2      |
| 8         | 2                | 2      |
| 1         | 2                | 1      |
| 6         | 1                | 1      |
*/

console.log(minStack.pop()); // 1
console.log(minStack.getMin()); // 2

console.log(minStack.top()); // 8

console.log(minStack.pop()); // 8
console.log(minStack.getMin()); // 2

/*
| Operation | Best     | Average  | Worst    |
| --------- | -------- | -------- | -------- |
| getMin    | **O(1)** | **O(1)** | **O(1)** |
*/
