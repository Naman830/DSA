/*
Number of answers = answers when we TAKE + answers when we DON'T TAKE
                 COUNT
                /     \
             TAKE    NOT TAKE
               ↓         ↓
             count     count
                \       /
                 \     /
                ADD THEM
                   ↓
             final count
*/

function countSubsets(index, arr, sum, target) {
  // Base case:
  // We have processed every element
  if (index === arr.length) {
    // If current subset has target sum,
    // count this as ONE valid answer
    if (sum === target) {
      return 1;
    }

    // This path does not give a valid answer
    return 0;
  }

  // -------------------------
  // 1. TAKE current element
  // -------------------------

  let take = countSubsets(index + 1, arr, sum + arr[index], target);

  // -------------------------
  // 2. DON'T TAKE current element
  // -------------------------

  let notTake = countSubsets(index + 1, arr, sum, target);

  // Total answers from both choices
  return take + notTake;
}

// Test
console.log(countSubsets(0, [1, 2, 3], 0, 3));

// Output:
// 2
