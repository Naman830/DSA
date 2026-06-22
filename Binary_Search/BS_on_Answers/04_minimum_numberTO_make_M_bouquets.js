/*
You are given:
bloomDay[i] = day on which the ith flower blooms.
m = number of bouquets needed.
k = flowers required for one bouquet.
Rule

A bouquet can only be made using k adjacent flowers.

Goal

Find the minimum number of days needed to make exactly m bouquets.

If impossible, return -1.


OBSERVATIONNNNNNNNNNNNNNNNNNN
Suppose day = 3

Flowers bloomed:
[1,10,3,10,2]
↓
[Bloomed, Not, Bloomed, Not, Bloomed]
Can make 3 bouquets.

Suppose day = 10
Now all flowers bloom.
Can definitely make 3 bouquets.
*/

// 1. Brute Force Solution
/*
Try every day from:
1 → max(bloomDay)

For each day:
Check if m bouquets can be formed.
First valid day = answer.

Helper Function
For a given day:
Count adjacent bloomed flowers.
Whenever count reaches k:
1 bouquet formed
Reset count.
*/
