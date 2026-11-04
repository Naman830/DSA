/*

*/
class TimeMap {
  constructor() {
    // Stores key -> [[timestamp, value], ...]
    this.map = new Map();
  }

  set(key, value, timestamp) {
    // Create an array if the key doesn't exist
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    // Timestamps are guaranteed to be increasing
    this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    // If key doesn't exist, return empty string
    if (!this.map.has(key)) return "";

    const arr = this.map.get(key);

    let left = 0;
    let right = arr.length - 1;

    // Stores the best valid answer
    let result = "";

    // Binary Search
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // If current timestamp is valid
      if (arr[mid][0] <= timestamp) {
        result = arr[mid][1];

        // Search towards the right for a closer timestamp
        left = mid + 1;
      } else {
        // Current timestamp is too large
        right = mid - 1;
      }
    }

    return result;
  }
}

// Test cases
const timeMap = new TimeMap();

timeMap.set("foo", "bar", 1);
timeMap.set("foo", "bar2", 4);

console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
console.log(timeMap.get("foo", 4)); // "bar2"
console.log(timeMap.get("foo", 5)); // "bar2"
console.log(timeMap.get("foo", 0)); // ""
