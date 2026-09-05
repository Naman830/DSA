/*
Explanation:-

You are given:
n → numbers from 1 to n
k → which permutation you want

Return the k-th permutation in lexicographical (dictionary) order.
Example:

n = 3
Permutations:
123 -1
132 -2
213 -3
231 -4
312
321

k = 4

Answer = "231"
*/

/*
Key observations

There are n! total permutations.
We don't need to generate all permutations.
The important idea is to determine which number should come at each position.
We use factorial blocks to directly find the k-th permutation.
*/

/*
Example:-
Suppose:

n = 4
numbers = [1, 2, 3, 4]
k = 9

There are: 3! = 6

permutations starting with each number:
1 → 6 permutations
2 → 6 permutations
3 → 6 permutations
4 → 6 permutations

Since k = 9:
k - 1 = 8
8 / 6 = 1

So the first number is index 1:
2

Remove 2:
[1, 3, 4]
Then repeat the same process.

Why k - 1?
Because indexes are 0-based.
*/
