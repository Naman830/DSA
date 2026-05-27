// 1. Parameterized Way
// In parameterized recursion, we carry the answer with us using an extra parameter.

function sumParameterized(n, total) {
  // Base case:
  // When n becomes 0, we have added all numbers
  if (n === 0) {
    console.log(total);
    return;
  }

  // Add current n into total
  // Then reduce n by 1
  sumParameterized(n - 1, total + n);
}

sumParameterized(5, 0);

/*
Dry Run
sumParameterized(5, 0)
sumParameterized(4, 5)
sumParameterized(3, 9)
sumParameterized(2, 12)
sumParameterized(1, 14)
sumParameterized(0, 15)
*/