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

// TC: O(n²) && SC: O(1)

// 2. Optimal Approach
/*
First Understand "At Most K"
Instead of findinds

Exactly K
we first solve
At Most K

because Sliding Window handles this naturally.

Pseudocode
function atMost(K)

left = 0
for right
    add current character

    while distinct > K
        remove left character
        move left
    
    sanswer += right-left+1

return answer

Exactly(K) = AtMost(K) - AtMost(K-1)
*/

function countAtMostKDistinct(s, k) {
  const freq = new Map();
  let left = 0;
  let count = 0;

  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);
    while (freq.size > k) {
      freq.set(s[left], freq.get(s[left]) - 1);

      if (freq.get(s[left]) === 0) {
        freq.delete(s[left]);
      }

      left++;
    }

    // Count all valid substrings ending at 'right'
    count += right - left + 1;
  }

  return count;
}

// Function to count substrings with exactly K distinct characters
function countExactlyKDistinct(s, k) {
  return countAtMostKDistinct(s, k) - countAtMostKDistinct(s, k - 1);
}

console.log(countExactlyKDistinct("abc", 2)); // 2
console.log(countExactlyKDistinct("pqpqs", 2)); // 7
console.log(countExactlyKDistinct("aa", 1)); // 3
console.log(countExactlyKDistinct("aba", 2)); // 3

/*
| Case    | Time     | Space |
| ------- | -------- | ----- |
| Best    | **O(n)** | O(k)  |
| Average | **O(n)** | O(k)  |
| Worst   | **O(n)** | O(k)  |
*/
