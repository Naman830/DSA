/*
Number of answers = answers when we TAKE + answers when we DON'T TAKE
                  PROBLEM
                     |
              Make a choice
              /           \
           TAKE          DON'T TAKE
             |               |
          solve()          solve()
             |               |
          count 1          count 2
              \             /
               \           /
                ADD THEM
                   |
             count 1 + count 2
*/
function count(index, arr) {
  // ==========================================
  // BASE CASE
  // ==========================================

  // One complete answer is formed.
  if (index === arr.length) {
    return 1;
  }

  // ==========================================
  // TAKE
  // ==========================================

  arr.push(index);

  // Count all answers possible after TAKE.
  const take = count(index + 1, arr);

  // Backtrack
  arr.pop();

  // ==========================================
  // DON'T TAKE
  // ==========================================

  // Count all answers possible after DON'T TAKE.
  const notTake = count(index + 1, arr);

  // ==========================================
  // TOTAL
  // ==========================================

  // Total answers = TAKE + DON'T TAKE
  return take + notTake;
}

// Start counting
const total = count(0, []);

console.log("Total answers:", total);
