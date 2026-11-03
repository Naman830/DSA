/*
Explanation:-
You are given an array of product names and a search word. After typing each character of the search word, return the three lexicographically smallest product names that start with the current search prefix.

const products = [
  "mobile",
  "mouse",
  "moneypot",
  "monitor",
  "mousepad"
];

const searchWord = "mouse";

[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/

/*
Key observation
- Sort the products lexicographically first.
- Build the search prefix one character at a time.
- For each prefix, find products that start with it.
- Return at most three matching products.
- Sorting ensures that the first three matching products are lexicographically smallest.
*/

/*
1. Brute-force solution
Check every product to find those starting with the prefix.

N = number of products.
M = length of the search word.
L = maximum length of a product.

TC: Approximately O(M × (N × L + N log N × L))
SC: O(N X L)
*/
