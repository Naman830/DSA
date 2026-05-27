// 1. Print name Name N times

function nameNtimes(i, n) {
  // Base case: stop when i becomes greater than n
  if (i > n) return;

  console.log("Naman");

  // Recursive call with next count
  nameNtimes(i + 1, n);
}

nameNtimes(1, 5);
