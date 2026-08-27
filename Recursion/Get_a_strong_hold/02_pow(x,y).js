/*
You are given:
x = 2
n = 10

You need to calculate:
2¹⁰ = 1024

In other words:
Return x raised to the power n.

Examples:
myPow(2, 10)   → 1024
myPow(2.1, 3)  → 9.261
myPow(2, -2)   → 0.25 ----> if number is negative  1 / x
*/

// Brute Force
// TC: O(n) && SC: O(1)
// Simply multiply x by itself n times.

function myPowBrute(x, n) {
  // Base case: any number to the power of 0 is 1
  if (n === 0 || x === 1.0) return 1;

  let temp = n; // to avoid integer overflow

  // Handle negative exponents
  if (n < 0) {
    x = 1 / x;
    temp = -n;
  }

  let ans = 1;

  for (let i = 0; i < temp; i++) {
    // Multiply ans by x for n times
    ans *= x;
  }
  return ans;
}

console.log(myPowBrute(2.0, 10));

// ==================================================================================
// Optimal Solution (Recurisve)
// ==================================================================================
// TC: O(log n) && sc: O(log n)
/*
x¹⁰ = (x⁵)²

And:
x⁵ = x × x⁴ 

And:
x⁴ = (x²)²

So we can keep halving the exponent.
n = 10
↓
n = 5
↓
n = 2
↓
n = 1
↓
n = 0
*/

// Recursive Binary Exponentiation
function myPow(x, n) {
  // Negative exponent:
  // x^(-n) = 1 / x^n
  if (n < 0) {
    return 1 / power(x, -n);
  }

  return power(x, n);
}

function power(x, n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Solve smaller problem
  const half = power(x, Math.floor(n / 2));

  // If exponent is even:
  // x^n = (x^(n/2))²
  if (n % 2 === 0) {
    return half * half;
  }

  // If exponent is odd:
  // x^n = x * (x^(n/2))²
  return x * half * half;
}

// Test cases
console.log(myPow(2, 10)); // 1024
console.log(myPow(2.1, 3)); // 9.261
console.log(myPow(2, -2)); // 0.25
console.log(myPow(5, 0)); // 1
