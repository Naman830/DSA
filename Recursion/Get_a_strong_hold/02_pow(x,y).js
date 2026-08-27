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
  // Base case 1:- If our n value is equal to 0 or 1 return 1
  if (n === 0 || n === 1) return 1;

  // Check does number is negative
  let temp = n;
  if (n < 0) {
    x = 1 / x;
    temp = -n;
  }

  // Simply now multiply the x by itself and return it
  let ans = 1;

  for (let i = 0; i < n.length; i++) {
    ans *= x;
  }

  return ans;
}

console.log(myPowBrute(2.0, 10));
