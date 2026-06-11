// The Lower Bound of x is:
// The first index where the value is greater than or equal to x (>= x).
/*
Intuition

Whenever we find an element that is >= x:
It can be a possible answer.
But there may be another valid answer on the left side.
So store it and move left.
*/
