function stocks(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    let profit = arr[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);

    minPrice = Math.min(minPrice, arr[i]);
  }
  return maxProfit;
}

console.log(stocks([3, 4, 5, 6, 8, 1, 10]));
