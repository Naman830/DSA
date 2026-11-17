/*
A number is called a Happy Number if we repeatedly replace the number with the sum of the squares of its digits until we get 1.

If we get 1, it's a happy number.
If we enter a cycle and never reach 1, it's not a happy number.
*/

/*
Key observations
- We need to calculate the square of every digit and add them.
- Repeat this process until we get 1.
- The important problem is detecting an infinite loop.
- We can use a Set to remember previously visited numbers.
- If a number appears again, we have entered a cycle.
*/
