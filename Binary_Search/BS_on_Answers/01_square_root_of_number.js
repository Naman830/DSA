/*
1. Most beginners think: Binary Search works only on arrays.
Wrong.
2. Binary Search works whenever: Search Space is sorted.

For square root:
n = 28

Possible answers:
0 1 2 3 4 5 6 ...

Observe:
mid	mid²
1	1
2	4
3	9
4	16
5	25
6	36

The values of mid² increase continuously.
1 < 4 < 9 < 16 < 25 < 36

This is a sorted search space.

Hence: Binary Search on Answer

*/

/*
Pseudocode
low = 1
high = n
ans = 0

while(low <= high)

    mid = (low + high)/2

    if(mid*mid <= n)
        ans = mid
        low = mid + 1

    else
        high = mid - 1

return ans
*/

// TC: O(log n) && SC: O(1)

function squareRoot(n) {
  let low = 1;
  let high = n;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Valid answer
    if (mid * mid <= n) {
      ans = mid; // store candidate
      low = mid + 1; // try bigger answer
    } else {
      high = mid - 1; // move left
    }
  }

  return ans;
}

console.log(squareRoot(28)); // 5
console.log(squareRoot(36)); // 6
console.log(squareRoot(25)); // 5
