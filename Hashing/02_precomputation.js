// Precomputation means calculating useful information once in advance and storing it, so that future queries can be answered quickly.

// When we use hashing for this, we store the precomputed data in a:
// HashMap / Object / Map / Array frequency table

// Maximum array length in function = 10 power 6
// Maximum array length in global = 10 power 7

// SECRET SAUSES
// Step 1: Create hash table
// Step 2: Traverse data once
// Step 3: Store useful information
// Step 4: Answer queries using hash table

/*
Optimal Pseudocode
create empty hash map

for each element in array:
    if element exists in map:
        increase its count
    else:
        store it with count 1

for each query:
    if query exists in map:
        print map[query]
    else:
        print 0
*/

function countFrequenciesUsingHashing(arr, queries) {
  // Step 1: Create an empty frequency map
  // Key = number from array
  // Value = how many times that number appears
  const frequencyMap = new Map();

  // Step 2: Precompute frequency of every number
  for (let num of arr) {
    // If number already exists in map, increase its count
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    }
    // If number is coming for the first time, store count as 1
    else {
      frequencyMap.set(num, 1);
    }
  }

  // Step 3: Answer each query using precomputed map
  for (let query of queries) {
    // If query exists in map, get its frequency
    // Otherwise answer is 0
    const count = frequencyMap.get(query) || 0;

    console.log(`${query} appears ${count} times`);
  }
}

const arr = [1, 2, 3, 1, 2, 1, 4];
const queries = [1, 2, 4, 10];

countFrequenciesUsingHashing(arr, queries);
