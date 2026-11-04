/*
Since timestamps are already sorted, we can use Binary Search instead of traversing the entire array.

Find the rightmost timestamp that is less than or equal to the given timestamp.

Operation	Time
set()	:- O(1)
get()	:- O(log n)

- Time: O(log n) for get().
- Space: O(N) for storing all entries.
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
