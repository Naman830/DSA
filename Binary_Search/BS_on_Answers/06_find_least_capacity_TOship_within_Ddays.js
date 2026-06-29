// Simple meaning you have to find the least capcity of ship that it can carry weight of the packages within d days

// 1. Brute force

/*
Pseudo

Find the maximum weight in the array (minimum capacity possible).
Calculate the sum of all weights (maximum capacity possible).
For each capacity from max weight to sum:
Simulate shipping: load packages one by one until capacity is reached, then move to next day.
If total days used is ≤ d, return that capacity.
*/
