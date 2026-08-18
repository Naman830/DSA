# 🅰️ Adobe — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Adobe owns *strings, math, backtracking and classic grid DP* — the questions that dominate its OA and
> first two rounds. Problems another folder owns are listed under **Cross-references**.

## What Adobe actually tests

Adobe runs an **OA (HackerRank/Codility) → 2–3 technical rounds → hiring manager** loop, and the OA is a
real filter: 2–3 problems, aggressive timer, hidden tests.

- **Strings and math carry the OA.** Palindromes, anagrams, number-to-string conversions, counting problems.
- **Backtracking is an Adobe favourite** — subsets/combinations/permutations variants show up more here than at most FAANG loops.
- **Classic grid DP** (min path, triangle, unique BSTs) is standard in the onsite rounds.
- **They ask about your language.** Adobe interviewers commonly go one level into JS/Java/C++ internals — memory, references, string immutability.
- **Clean brute force first is accepted**, then they ask you to optimise. Always state the brute force with its complexity before jumping.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — Adobe OA staples: strings & math

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Longest Palindromic Substring | Medium | Expand around centre / DP | https://leetcode.com/problems/longest-palindromic-substring/ | ⬜ |
| 2 | Longest Common Subsequence | Medium | 2D DP | https://leetcode.com/problems/longest-common-subsequence/ | ⬜ |
| 3 | Combination Sum | Medium | Backtracking with reuse | https://leetcode.com/problems/combination-sum/ | ⬜ |
| 4 | Single Number | Easy | XOR cancellation | https://leetcode.com/problems/single-number/ | ⬜ |
| 5 | Sqrt(x) | Easy | Binary search / Newton's method | https://leetcode.com/problems/sqrtx/ | ⬜ |
| 6 | Pascal's Triangle | Easy | Row-by-row construction | https://leetcode.com/problems/pascals-triangle/ | ⬜ |
| 7 | Roman to Integer | Easy | Subtract when a smaller numeral precedes | https://leetcode.com/problems/roman-to-integer/ | ⬜ |
| 8 | Integer to Roman | Medium | Greedy over a value/symbol table | https://leetcode.com/problems/integer-to-roman/ | ⬜ |
| 9 | Count and Say | Medium | Run-length string generation | https://leetcode.com/problems/count-and-say/ | ⬜ |
| 10 | Valid Anagram | Easy | Frequency counting | https://leetcode.com/problems/valid-anagram/ | ⬜ |
| 11 | First Unique Character in a String | Easy | Two-pass frequency scan | https://leetcode.com/problems/first-unique-character-in-a-string/ | ⬜ |
| 12 | Reverse Vowels of a String | Easy | Two pointers with a vowel set | https://leetcode.com/problems/reverse-vowels-of-a-string/ | ⬜ |
| 13 | Repeated Substring Pattern | Easy | `(s+s).slice(1,-1).includes(s)` / KMP | https://leetcode.com/problems/repeated-substring-pattern/ | ⬜ |
| 14 | Number of 1 Bits | Easy | `n & (n-1)` bit clearing | https://leetcode.com/problems/number-of-1-bits/ | ⬜ |
| 15 | Next Permutation | Medium | Pivot + swap + reverse suffix | https://leetcode.com/problems/next-permutation/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Longest Palindromic Substring** — Expand around all `2n-1` centres (odd and even) in `O(n²)` time, `O(1)` space. Mention Manacher's `O(n)` exists but don't attempt it live unless asked.
- **2. Longest Common Subsequence** — `dp[i][j] = dp[i-1][j-1] + 1` on a match, else `max(dp[i-1][j], dp[i][j-1])`. Rolling two rows gives `O(min(m,n))` space; reconstructing the string is the standard follow-up.
- **3. Combination Sum** — Backtrack passing `i` (not `i+1`) so numbers can repeat; sort first and `break` when `candidate > remaining`. Combination Sum II (no reuse, dedup) is in the Salesforce folder.
- **4. Single Number** — XOR everything. Extend live: "every element appears three times" ⇒ bit-count mod 3, or `ones/twos` masks.
- **5. Sqrt(x)** — Binary search on `[0, x]` with `mid*mid <= x`, returning `hi`. Watch overflow — compare with `mid <= x / mid` in fixed-width languages.
- **6. Pascal's Triangle** — Each row starts and ends with 1; the middle is the sum of the two above. Follow-up: return only row `k` in `O(k)` space using the `C(n,r)` recurrence.
- **7. Roman to Integer** — Add each value; if the current numeral is smaller than the next, subtract instead. One pass, no special-case table.
- **8. Integer to Roman** — Greedy over `[1000 M, 900 CM, 500 D, ..., 1 I]`, subtracting while it fits. The subtractive pairs in the table are what make it correct.
- **9. Count and Say** — Iteratively build: walk the previous string, count runs, append `count + char`. It's simulation, so just keep the loop clean.
- **10. Valid Anagram** — 26-length count array, ++ for `s`, -- for `t`, all zeros at the end. Unicode follow-up ⇒ HashMap.
- **11. First Unique Character** — Count in pass 1, find the first with count 1 in pass 2. Say `O(n)` time / `O(1)` space (fixed alphabet).
- **12. Reverse Vowels of a String** — Two pointers that only stop on vowels, swap, move inward. Remember uppercase vowels.
- **13. Repeated Substring Pattern** — The one-liner works because a periodic string reappears inside its own doubled copy with the first and last characters removed. Also know the KMP failure-function argument: `n % (n - lps[n-1]) === 0`.
- **14. Number of 1 Bits** — `n &= n - 1` clears the lowest set bit; loop until zero. In JS use `>>> 0` for unsigned semantics.
- **15. Next Permutation** — Scan from the right for the first `a[i] < a[i+1]`, swap with the rightmost element greater than it, reverse the suffix. Fully descending ⇒ reverse the whole array.

---

## Tier 2 — trees, search & counting DP

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Kth Smallest Element in a Sorted Matrix | Medium | Heap / binary search on value | https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ | ⬜ |
| 17 | Find K Closest Elements | Medium | Binary search the window start | https://leetcode.com/problems/find-k-closest-elements/ | ⬜ |
| 18 | Lowest Common Ancestor of a Binary Search Tree | Medium | Walk down using BST ordering | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ | ⬜ |
| 19 | Path Sum | Easy | Root-to-leaf DFS with a remainder | https://leetcode.com/problems/path-sum/ | ⬜ |
| 20 | Subtree of Another Tree | Easy | isSameTree at every node / string hash | https://leetcode.com/problems/subtree-of-another-tree/ | ⬜ |
| 21 | Maximum Width of Binary Tree | Medium | BFS with positional indices | https://leetcode.com/problems/maximum-width-of-binary-tree/ | ⬜ |
| 22 | Unique Binary Search Trees | Medium | Catalan DP | https://leetcode.com/problems/unique-binary-search-trees/ | ⬜ |
| 23 | Distinct Subsequences | Hard | 2D counting DP | https://leetcode.com/problems/distinct-subsequences/ | ⬜ |
| 24 | Interleaving String | Medium | 2D DP over two pointers | https://leetcode.com/problems/interleaving-string/ | ⬜ |
| 25 | Palindromic Substrings | Medium | Expand around centre counting | https://leetcode.com/problems/palindromic-substrings/ | ⬜ |
| 26 | Restore IP Addresses | Medium | Backtracking with segment validation | https://leetcode.com/problems/restore-ip-addresses/ | ⬜ |
| 27 | Letter Case Permutation | Medium | Backtracking / bitmask over letters | https://leetcode.com/problems/letter-case-permutation/ | ⬜ |
| 28 | Subsets II | Medium | Backtracking with duplicate skipping | https://leetcode.com/problems/subsets-ii/ | ⬜ |
| 29 | Combinations | Medium | Backtracking with a start index | https://leetcode.com/problems/combinations/ | ⬜ |
| 30 | Gray Code | Medium | `i ^ (i >> 1)` / mirror construction | https://leetcode.com/problems/gray-code/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Kth Smallest in a Sorted Matrix** — Min-heap seeded with the first column (`O(k log n)`), or binary search the value range counting elements ≤ mid with a staircase walk (`O(n log range)`). Offer both.
- **17. Find K Closest Elements** — Binary search the left edge of the window over `[0, n-k]` comparing `x - arr[mid]` with `arr[mid+k] - x`. Beats the two-pointer shrink for large `n`.
- **18. LCA of a BST** — Descend while both targets are on the same side; the first node that splits them (or equals one) is the LCA. `O(h)`, no recursion needed.
- **19. Path Sum** — Subtract as you descend and check at leaves (`!node.left && !node.right`). Negative values mean you can't prune early — call that out.
- **20. Subtree of Another Tree** — For each node with a matching value, run `isSameTree`. `O(mn)`. The elegant answer: serialise both with null markers and check substring containment (with delimiters so `2` doesn't match `12`).
- **21. Maximum Width of Binary Tree** — BFS carrying a heap-style index (`2i`, `2i+1`); width per level is `last - first + 1`. Normalise indices per level to avoid overflow.
- **22. Unique Binary Search Trees** — `G[n] = Σ G[i-1] * G[n-i]` — pick each value as root. That's the Catalan number; the follow-up (Unique BST II) asks you to build them.
- **23. Distinct Subsequences** — `dp[i][j] = dp[i-1][j]` plus `dp[i-1][j-1]` when characters match. Seed `dp[i][0] = 1` (the empty target is always matchable once).
- **24. Interleaving String** — `dp[i][j]` = can `s1[0..i)` + `s2[0..j)` form `s3[0..i+j)`. Length check first — it's the instant reject.
- **25. Palindromic Substrings** — Same centre expansion as #1, but count every successful expansion instead of tracking the longest.
- **26. Restore IP Addresses** — Backtrack over 4 segments, each 1–3 digits, value ≤ 255, and no leading zeros unless the segment is exactly `"0"`. Prune on remaining-length bounds.
- **27. Letter Case Permutation** — Branch on letters (two ways), pass digits through. `O(2^L · n)`.
- **28. Subsets II** — Sort, then inside the loop `if (i > start && nums[i] === nums[i-1]) continue;`. That one line is the whole dedup.
- **29. Combinations** — Backtrack with a start index, and prune when the remaining numbers can't fill the slots (`i <= n - (k - path.length) + 1`).
- **30. Gray Code** — `result[i] = i ^ (i >> 1)`. Be able to explain the mirror-and-prefix construction too, since they often ask "why does that work".

---

## Tier 3 — grid DP, matching & graph hards

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Jump Game III | Medium | BFS/DFS over reachable indices | https://leetcode.com/problems/jump-game-iii/ | ⬜ |
| 32 | Minimum Path Sum | Medium | Grid DP | https://leetcode.com/problems/minimum-path-sum/ | ⬜ |
| 33 | Triangle | Medium | Bottom-up DP in place | https://leetcode.com/problems/triangle/ | ⬜ |
| 34 | Dungeon Game | Hard | Reverse grid DP (from the end) | https://leetcode.com/problems/dungeon-game/ | ⬜ |
| 35 | Burst Balloons | Hard | Interval DP on the last balloon | https://leetcode.com/problems/burst-balloons/ | ⬜ |
| 36 | Wildcard Matching | Hard | 2D DP / greedy with backtrack pointers | https://leetcode.com/problems/wildcard-matching/ | ⬜ |
| 37 | Pacific Atlantic Water Flow | Medium | Reverse DFS from both oceans | https://leetcode.com/problems/pacific-atlantic-water-flow/ | ⬜ |
| 38 | Minimum Height Trees | Medium | Topological leaf peeling | https://leetcode.com/problems/minimum-height-trees/ | ⬜ |
| 39 | Implement Magic Dictionary | Medium | Trie / bucketed one-char-off keys | https://leetcode.com/problems/implement-magic-dictionary/ | ⬜ |
| 40 | Maximum XOR of Two Numbers in an Array | Medium | Binary trie / prefix-mask greedy | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Jump Game III** — Plain BFS/DFS from `start`, marking visited (negating the value is the `O(1)`-space trick). Goal: any index with value 0.
- **32. Minimum Path Sum** — `dp[i][j] = grid[i][j] + min(up, left)`; do it in place for `O(1)` extra space and seed the first row/column separately.
- **33. Triangle** — Start at the bottom row and fold upward: `t[i][j] += min(t[i+1][j], t[i+1][j+1])`. Bottom-up removes all boundary special cases.
- **34. Dungeon Game** — You must go **backwards** because the requirement is on the minimum health *entering* a cell: `need[i][j] = max(1, min(right, down) - grid[i][j])`. Forward DP is the classic wrong answer here.
- **35. Burst Balloons** — Think about which balloon is burst **last** in a range; then the two sides are independent. `dp[l][r] = max(dp[l][k] + nums[l-1]*nums[k]*nums[r+1] + dp[k][r])` with padded 1s.
- **36. Wildcard Matching** — `*` matches empty or one more char: `dp[i][j] = dp[i-1][j] || dp[i][j-1]`. The greedy two-pointer version with a remembered star position is `O(1)` space — worth showing if time allows.
- **37. Pacific Atlantic Water Flow** — Don't simulate downhill from every cell. DFS **uphill** from each ocean's border and intersect the two reachable sets.
- **38. Minimum Height Trees** — Repeatedly strip degree-1 nodes layer by layer; the last 1 or 2 remaining nodes are the answer (centroids of the tree). Never more than 2 — say why.
- **39. Implement Magic Dictionary** — Either a Trie with a "one mismatch allowed" DFS flag, or bucket words by length and compare with an exactly-one-diff counter.
- **40. Maximum XOR of Two Numbers** — Insert numbers into a 32-level binary Trie and for each number walk the **opposite** bit when available. The prefix-mask + HashSet greedy is the shorter alternative.

---

## 🔗 Cross-references (Adobe asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| Two Sum, Trapping Rain Water, Merge Intervals, Coin Change, Word Break, Top K Frequent Elements | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Longest Consecutive Sequence, Minimum Window Substring, Word Search II, Candy | [`../Google/`](../Google/google_dsa_questions.md) |
| Group Anagrams, Subsets, Letter Combinations of a Phone Number, Regular Expression Matching, Pow(x, n) | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Edit Distance, Longest Increasing Subsequence, Permutations, Generate Parentheses, Rotate Image, Spiral Matrix | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| 3Sum, Climbing Stairs, House Robber, Unique Paths, Decode Ways | [`../Apple/`](../Apple/apple_dsa_questions.md) |

## 📅 Suggested order (2.5 weeks — OA first)

1. **Week 1 (OA prep) — strings & math:** 1, 7, 8, 9, 10, 11, 12, 13, 4, 5, 6, 14, 15
2. **Week 2 — backtracking & counting DP:** 3, 26, 27, 28, 29, 30, 22, 23, 24, 25, 2
3. **Days 15–18 — grid DP & graphs:** 32, 33, 34, 35, 36, 37, 38, 31, 16, 17, 39, 40

> Adobe-specific drill: the OA gives you **hidden tests**, so practise writing 3–4 of your own test cases *before* submitting — empty string, single char, all-same characters, max constraint. That habit alone clears most Adobe OA failures.
