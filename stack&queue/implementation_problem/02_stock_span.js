/*
For each day's stock price, find how many consecutive days before today had a price ≤ today's price.

Example:
Prices:  [100, 80, 60, 70, 60, 75, 85]
Span:    [  1,  1,  1,  2,  1,  4,  6]

For 75:

60 ≤ 75 ✅
70 ≤ 75 ✅
60 ≤ 75 ✅
80 > 75 ❌ stop

Span = 4

Key observation:-
We need to find the Previous Greater Element (PGE).

i. If PGE exists at index j:            span = i - j
ii. If there is no greater element:     span = i + 1

So Stock Span is basically a Previous Greater Element problem.
*/

// 1. Brute Force
// Time: O(N²) && Space: O(1)

function stockSpanBrute(prices) {
  const n = prices.length;
  const span = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let j = i - 1;

    while (j >= 0 && prices[j] <= prices[i]) {
      span[i]++;
      j--;
    }
  }
  return span;
}

console.log(stockSpanBrute([100, 80, 60, 70, 60, 75, 85]));
// [1, 1, 1, 2, 1, 4, 6]

// ===============================================================================
// 2. Optimal Monotonic Stack
// ===============================================================================
/*
We can solve it using a monotonic decreasing stack.

The stack stores indices of useful previous greater elements.

For every i:

i. Remove prices from stack that are <= current price.
ii. The stack top is now the Previous Greater Element.
iii. Calculate the span.
iv. Push current index.

TC: O(n) && SC: O(n)
*/

function stockSpan(prices) {
  const stack = [];
  const span = new Array(prices.length);

  for (let i = 0; i < prices.length; i++) {
    // Remove all smaller or equal prices
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }

    // No previous greater element
    if (stack.length === 0) {
      span[i] = i + 1;
    }
    // Previous greater element exists
    else {
      span[i] = i - stack[stack.length - 1];
    }

    // Store current index
    stack.push(i);
  }

  return span;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
// [1, 1, 1, 2, 1, 4, 6]

console.log(stockSpan([10, 4, 5, 90, 120, 80]));
// [1, 1, 2, 4, 5, 1]
