/*
In stock problems, we usually have an array:

prices = [7, 1, 5, 3, 6, 4]

Each value means stock price on that day.

Your goal is usually:
Buy at a low price and sell at a high price to get maximum profit.

But the rules change from problem to problem.
*/

// CONDITION_1
// You can buy only once and sell only once.
// Find the maximum profit.

/*
Pseudocode

function maxProfit(prices):

    mini = prices[0]
    maxProfit = 0

    for i from 1 to n - 1:

        profit = prices[i] - mini

        maxProfit = maximum(maxProfit, profit)

        mini = minimum(mini, prices[i])

    return maxProfit


Remember This Trick
    mini = best buying price so far
    prices[i] - mini = profit if selling today
    maxProfit = best profit so far
*/

// TC: O(n) & SC: O(1)

/*
Best Time to Buy and Sell Stock

You are given an array where:
prices[i] = stock price on day i

You can:
- Buy only one stock.
- Sell only one stock.
- Buy must happen before selling.

Return the maximum profit.
If no profit is possible, return 0.
*/

function maxProfit(prices) {
  // Assume the first day's price is the cheapest initially
  let minimumPrice = prices[0];

  // Maximum profit we have found so far
  let maximumProfit = 0;

  // Start checking from the second day
  for (let i = 1; i < prices.length; i++) {
    // Profit if we buy at the cheapest price
    // and sell on the current day
    let currentProfit = prices[i] - minimumPrice;

    // If current profit is greater, update maximum profit
    if (currentProfit > maximumProfit) {
      maximumProfit = currentProfit;
    }

    // If today's price is smaller than the minimum price,
    // then update the minimum buying price
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];
    }
  }

  // Return the best profit found
  return maximumProfit;
}

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([1, 2])); // 1
