// 1. Print name Name N times

function nameNtimes(i, n) {
  // Base case: stop when i becomes greater than n
  if (i > n) return;

  console.log("Naman");

  // Recursive call with next count
  nameNtimes(i + 1, n);
}

nameNtimes(1, 5);

// Print Numbers from 1 to N
// for N to 1 (just proint before smaller number subtracting)

function print1toN(n) {
  // Base case: when n becomes 0, stop recursion
  if (n === 0) {
    return;
  }

  // First go to smaller problem
  print1toN(n - 1);

  // Print while coming back
  console.log(n);
}

print1toN(5);
