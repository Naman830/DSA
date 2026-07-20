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
