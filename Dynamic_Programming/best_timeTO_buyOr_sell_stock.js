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
*/
