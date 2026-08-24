// Problem:
// Design a data structure that follows the constraints of an LRU (Least Recently Used) cache.
// Implement get(key) and put(key, value) in O(1) time.

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;

    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // Dummy nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    // Initially:
    // HEAD ⇄ TAIL
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove a node from the linked list
  remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  // Insert node just before TAIL
  // This means node becomes Most Recently Used
  insertAtMRU(node) {
    const lastNode = this.tail.prev;

    lastNode.next = node;
    node.prev = lastNode;

    node.next = this.tail;
    this.tail.prev = node;
  }

  get(key) {
    // Key doesn't exist
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);

    // Mark as Most Recently Used
    this.remove(node);
    this.insertAtMRU(node);

    return node.value;
  }

  put(key, value) {
    // Key already exists
    if (this.map.has(key)) {
      const node = this.map.get(key);

      node.value = value;

      // Move to MRU
      this.remove(node);
      this.insertAtMRU(node);

      return;
    }

    // Create new node
    const node = new Node(key, value);

    this.map.set(key, node);
    this.insertAtMRU(node);

    // Cache exceeded capacity
    if (this.map.size > this.capacity) {
      // head.next = Least Recently Used
      const lruNode = this.head.next;

      this.remove(lruNode);
      this.map.delete(lruNode.key);
    }
  }
}

// --------------------
// Test
// --------------------

const cache = new LRUCache(2);

cache.put(1, 10);
cache.put(2, 20);

console.log(cache.get(1)); // 10

cache.put(3, 30); // Removes key 2

console.log(cache.get(2)); // -1

cache.put(4, 40); // Removes key 1

console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40
