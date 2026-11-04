/*
Approach 1: Brute Force
Store all timestamp-value pairs in a HashMap.

For every get() operation, traverse the entire history and find the largest timestamp that is less than or equal to the requested timestamp.


TC & SC:-

set()	O(1)
get()	O(n)
- Time: get() takes O(n), where n is the number of timestamps for that key.
- Space: O(N), where N is the total number of stored entries.
*/

class TimeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value, timestamp) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    if (!this.map.has(key)) return "";

    const arr = this.map.get(key);

    let left = 0;
    let right = arr.length - 1;

    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid][0] <= timestamp) {
        result = arr[mid][1];

        // Search for a potentially larger valid timestamp
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}

// Example
const timeMap = new TimeMap();

timeMap.set("foo", "bar", 1);
timeMap.set("foo", "bar2", 4);

console.log(timeMap.get("foo", 1)); // bar
console.log(timeMap.get("foo", 3)); // bar
console.log(timeMap.get("foo", 4)); // bar2
console.log(timeMap.get("foo", 5)); // bar2
