/*
Koko has some piles of bananas.

piles = [3,6,7,11]
h = 8

Koko can choose an eating speed k bananas/hour.

Rules:
Every hour she picks one pile.
She eats at most k bananas from that pile.
If the pile has fewer than k, she eats the whole pile.
After eating, if bananas remain in that pile, she'll continue it in future hours.

We need to find:
The minimum eating speed k so that Koko finishes all bananas within h hours.

In simple we have to find minimum time in that koko can it whole banans and for that search we find our maxxium banana limit so that we can find our answer between the number
*/

/*
Brute force approach is simple try every possible number and when number find return the value

Pseudo code
for speed from 1 to maxPile

    calculate hours

    if hours <= h
        return speed
*/
