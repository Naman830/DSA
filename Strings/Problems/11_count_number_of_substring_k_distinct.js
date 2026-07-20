/*
Your task is to count how many substrings contain exactly k different (distinct) characters.
s = "pqpqs"
k = 2

Some valid substrings are:

"pq"
"pqp"
"pqpq"
"qp"
"qpq"
"pq"

Each of these contains exactly 2 distinct characters.

Key Observations
Substring means continuous characters.
We need exactly k distinct characters.
Checking every substring is very slow.
Sliding Window naturally finds at most K distinct characters.
Finding exactly K directly is difficult.
*/

// 1. Brute Force Approach
/*
Generate every possible substring.

For each substring:
Count distinct characters using a Set.
If distinct count == k, increment answer.
*/

function countSubstringsBruteForce(s, k) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const set = new Set();

    for (let j = i; j < s.length; j++) {
      set.add(s[j]);
      if (set.size === k) {
        count++;
      }

      if (set.size > k) {
        break;
      }
    }
  }
  return count;
}
console.log(countSubstringsBruteForce("abc", 2)); // 2
console.log(countSubstringsBruteForce("pqpqs", 2)); // 7
