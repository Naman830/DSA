/*
You are given n people and a matrix knows[i][j].

knows[i][j] = 1 means person i knows person j.

A celebrity must satisfy both:
Celebrity knows nobody → their entire row is 0.
Everybody knows the celebrity → their entire column is 1 except themselves.

Example:
      0  1  2
0     0  1  0
1     0  0  0
2     1  1  0

Person 1 is celebrity because:
Person 1 knows nobody → row 1 = [0,0,0]
Everybody knows person 1 → column 1 = [1,0,1]

Key Observation:- There should be only ONE celebrity
*/

/*
1. Brute Force — O(n²)

For each person i:
    Check row i → should contain no 1
    Check column i → should contain 1 from everyone else
*/

function findCelebrity(knows) {
  const n = knows.length;

  for (let i = 0; i < n; i++) {
    let isCelebrity = true;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        // Celebrity should know nobody
        if (knows[i][j] === 1) {
          isCelebrity = false;
          break;
        }

        // Everybody should know celebrity
        if (knows[j][i] === 0) {
          isCelebrity = false;
          break;
        }
      }
    }

    if (isCelebrity) return i;
  }

  return -1;
}

console.log(
  findCelebrity([
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 0],
  ]),
); // 1

console.log(
  findCelebrity([
    [0, 1],
    [1, 0],
  ]),
); // -1

// ===============================================================================
// 2. Optimal — Elimination + Verification
// ===============================================================================

function findCelebrityOptimal(knows) {
  const n = knows.length;

  // Step 1: Find the only possible candidate
  let candidate = 0;

  for (let i = 1; i < n; i++) {
    // If candidate knows i,
    // candidate cannot be the celebrity.
    if (knows[candidate][i] === 1) {
      candidate = i;
    }
  }

  // Step 2: Verify the candidate
  for (let i = 0; i < n; i++) {
    if (i === candidate) continue;

    // Celebrity knows nobody
    if (knows[candidate][i] === 1) {
      return -1;
    }

    // Everybody knows celebrity
    if (knows[i][candidate] === 0) {
      return -1;
    }
  }

  return candidate;
}

console.log(
  findCelebrityOptimal([
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 0],
  ]),
); // 1

console.log(
  findCelebrityOptimal([
    [0, 1],
    [1, 0],
  ]),
); // -1
