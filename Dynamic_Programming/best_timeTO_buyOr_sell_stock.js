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

function maxProfit(prices) {
  // mini stores the minimum buying price seen so far
  let mini = prices[0];

  // maxProfit stores the best profit we can make
  let maxProfit = 0;

  // Start from index 1 because index 0 is already taken as mini
  for (let i = 1; i < prices.length; i++) {
    // If we sell today, profit will be:
    // today's price - lowest price before today
    let profit = prices[i] - mini;

    // Update maxProfit if today's profit is better
    maxProfit = Math.max(maxProfit, profit);

    // Update minimum price for future days
    mini = Math.min(mini, prices[i]);
  }

  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
