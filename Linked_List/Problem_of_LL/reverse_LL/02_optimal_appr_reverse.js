/*
Imagine every node is a person holding the hand of the next person.

Before:
10 holds 20
20 holds 30
30 holds 40
40 holds 50

We want everyone to hold the previous person's hand instead.
After:

50 holds 40
40 holds 30
30 holds 20
20 holds 10

The problem is...
When you change
20.next = 10

you lose the connection to 30.
So before changing any pointer, we must save the next node.
That's why we use three pointers.
*/
