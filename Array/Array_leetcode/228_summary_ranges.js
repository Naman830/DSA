/*
Given a sorted array of unique integers, return the smallest list of ranges that covers every number in the array exactly once.

Input:  [0, 1, 2, 4, 5, 7]
Output: ["0->2", "4->5", "7"]

Key observation
- Start a range at the current number.
- Keep moving forward while the next number is exactly one greater than the current number.
- When the consecutive sequence ends, create a range.
- Continue from the next unprocessed number.
*/

/*
Brute-force solution

For each number, search the remaining array for its next consecutive number using indexOf(). Continue until the sequence ends.

Time: O(n^2) — indexOf() can scan the array repeatedly.
Auxiliary space: O(1), excluding the output array.
*/

/*
Optimal solution :- Linear scan
*/

function summaryRanges(nums) {
  const result = [];

  for (let i = 0; i < nums.length; ) {
    const start = nums[i];

    // Extend the range while consecutive numbers exist.
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    const end = nums[i];

    // A single number needs no arrow.
    result.push(start === end ? `${start}` : `${start}->${end}`);

    // Move to the next unprocessed number.
    i++;
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([1, 3, 5, 7]));
console.log(summaryRanges([]));

// ["0->2", "4->5", "7"]
// ["1", "3", "5", "7"]
// []
