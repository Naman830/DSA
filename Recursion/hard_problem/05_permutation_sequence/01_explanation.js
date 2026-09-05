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
