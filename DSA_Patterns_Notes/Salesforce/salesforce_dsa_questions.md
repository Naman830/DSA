# ☁️ Salesforce — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Salesforce owns the *clean fundamentals plus binary-search-on-answer and BST manipulation* band —
> approachable mediums executed perfectly. Problems another folder owns are under **Cross-references**.

## What Salesforce actually tests

Salesforce runs an **OA/phone screen → 3–4 onsite rounds (2 coding, 1 design/architecture, 1 hiring manager)**.

- **The DSA bar is moderate, the code-quality bar is not.** Most questions are easy/medium LeetCode; you're expected to write production-shaped code with tests and no hand-waving.
- **BST and tree manipulation shows up a lot** — insert, delete, trim, path sums. More than the usual "traverse and print".
- **Binary search on the answer** appears in the harder screens (capacity/threshold framing fits their platform work).
- **They ask a lot of "how would you test this".** Have a testing answer ready for every solution: happy path, boundary, invalid input, scale.
- **Behavioural weight is high.** Salesforce's values (trust, customer success, innovation, equality) get real airtime — prepare stories, not adjectives.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — fundamentals executed perfectly

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Valid Palindrome | Easy | Two pointers with filtering | https://leetcode.com/problems/valid-palindrome/ | ⬜ |
| 2 | Baseball Game | Easy | Stack simulation of ops | https://leetcode.com/problems/baseball-game/ | ⬜ |
| 3 | Two Sum II - Input Array Is Sorted | Medium | Two pointers on a sorted array | https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ | ⬜ |
| 4 | Squares of a Sorted Array | Easy | Two pointers filling from the back | https://leetcode.com/problems/squares-of-a-sorted-array/ | ⬜ |
| 5 | Remove Duplicates from Sorted List | Easy | Single-pass pointer skip | https://leetcode.com/problems/remove-duplicates-from-sorted-list/ | ⬜ |
| 6 | Intersection of Two Linked Lists | Easy | Two-pointer switch trick | https://leetcode.com/problems/intersection-of-two-linked-lists/ | ⬜ |
| 7 | Middle of the Linked List | Easy | Slow/fast pointers | https://leetcode.com/problems/middle-of-the-linked-list/ | ⬜ |
| 8 | Linked List Cycle | Easy | Floyd's cycle detection | https://leetcode.com/problems/linked-list-cycle/ | ⬜ |
| 9 | Binary Tree Paths | Easy | DFS with a path buffer | https://leetcode.com/problems/binary-tree-paths/ | ⬜ |
| 10 | Sum Root to Leaf Numbers | Medium | DFS carrying an accumulated number | https://leetcode.com/problems/sum-root-to-leaf-numbers/ | ⬜ |
| 11 | Count Good Nodes in Binary Tree | Medium | DFS carrying the path max | https://leetcode.com/problems/count-good-nodes-in-binary-tree/ | ⬜ |
| 12 | Delete Node in a BST | Medium | BST delete with successor swap | https://leetcode.com/problems/delete-node-in-a-bst/ | ⬜ |
| 13 | Insert into a Binary Search Tree | Medium | BST descend-and-attach | https://leetcode.com/problems/insert-into-a-binary-search-tree/ | ⬜ |
| 14 | Trim a Binary Search Tree | Medium | Recursive pruning by range | https://leetcode.com/problems/trim-a-binary-search-tree/ | ⬜ |
| 15 | Construct String from Binary Tree | Medium | Pre-order with parenthesis rules | https://leetcode.com/problems/construct-string-from-binary-tree/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Valid Palindrome** — Skip non-alphanumerics with two pointers and lowercase as you compare. Don't build a cleaned copy if they ask for `O(1)` space.
- **2. Baseball Game** — Stack; `"+"` sums the top two, `"D"` doubles the top, `"C"` pops. Sum at the end. Pure "can you read a spec carefully".
- **3. Two Sum II** — Sorted input ⇒ two pointers, `O(1)` space, 1-indexed output. Say why binary search per element (`O(n log n)`) is worse.
- **4. Squares of a Sorted Array** — The largest square is at one of the ends; fill the result from the back comparing `|left|` and `|right|`. `O(n)`, not sort.
- **5. Remove Duplicates from Sorted List** — `cur.next = cur.next.next` when values match, and **don't advance** in that case. Compare with the "remove all duplicates" (LC 82) variant out loud.
- **6. Intersection of Two Linked Lists** — Walk both, switching to the other head at the end; they meet at the intersection after at most `m+n` steps (both travel the same total distance). Null intersection falls out naturally.
- **7. Middle of the Linked List** — Fast moves 2, slow moves 1. Decide up front which middle you return for even lengths — that's the follow-up.
- **8. Linked List Cycle** — Slow/fast meeting means a cycle. The Set version is `O(n)` space; give both. Finding the entry point is in the Microsoft folder.
- **9. Binary Tree Paths** — DFS appending to a path string/array; record at leaves and backtrack. Watch the `"->"` join only between nodes.
- **10. Sum Root to Leaf Numbers** — Pass `cur * 10 + node.val` down; add at leaves. Single recursion, no global state needed.
- **11. Count Good Nodes** — Carry the maximum value seen on the path; a node is good when `node.val >= maxSoFar`. One DFS, `O(n)`.
- **12. Delete Node in a BST** — Three cases: leaf, one child (return the child), two children (swap with the in-order successor, then delete it from the right subtree). Write the successor helper first — this is the most-failed Salesforce tree question.
- **13. Insert into a BST** — Descend until the child slot is null and attach. The iterative version is 8 lines and avoids stack talk.
- **14. Trim a BST** — If `node.val < low` return `trim(node.right)`; if `> high` return `trim(node.left)`; otherwise trim both children. Three lines, but explain why it can't drop valid nodes.
- **15. Construct String from Binary Tree** — Pre-order; append `()` for a null left child **only if** a right child exists, and never for a null right child.

---

## Tier 2 — backtracking, DP & counting

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Replace Words | Medium | Trie of roots + word replacement | https://leetcode.com/problems/replace-words/ | ⬜ |
| 17 | Palindrome Partitioning | Medium | Backtracking + palindrome check | https://leetcode.com/problems/palindrome-partitioning/ | ⬜ |
| 18 | Combination Sum II | Medium | Backtracking, each number once, dedup | https://leetcode.com/problems/combination-sum-ii/ | ⬜ |
| 19 | Permutations II | Medium | Backtracking with sorted duplicate skip | https://leetcode.com/problems/permutations-ii/ | ⬜ |
| 20 | Delete and Earn | Medium | House-Robber transform on values | https://leetcode.com/problems/delete-and-earn/ | ⬜ |
| 21 | House Robber II | Medium | Two linear runs (circular array) | https://leetcode.com/problems/house-robber-ii/ | ⬜ |
| 22 | Coin Change II | Medium | Unbounded knapsack counting | https://leetcode.com/problems/coin-change-ii/ | ⬜ |
| 23 | Maximum Sum Circular Subarray | Medium | Kadane + total-minus-min-subarray | https://leetcode.com/problems/maximum-sum-circular-subarray/ | ⬜ |
| 24 | Longest Palindromic Subsequence | Medium | Interval DP | https://leetcode.com/problems/longest-palindromic-subsequence/ | ⬜ |
| 25 | Rotate String | Easy | Doubled-string containment | https://leetcode.com/problems/rotate-string/ | ⬜ |
| 26 | Group the People Given the Group Size They Belong To | Medium | Bucket by size, flush when full | https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/ | ⬜ |
| 27 | Find All Duplicates in an Array | Medium | Index-as-hash negation | https://leetcode.com/problems/find-all-duplicates-in-an-array/ | ⬜ |
| 28 | Set Mismatch | Easy | Counting / index marking | https://leetcode.com/problems/set-mismatch/ | ⬜ |
| 29 | Kth Missing Positive Number | Easy | Binary search on missing count | https://leetcode.com/problems/kth-missing-positive-number/ | ⬜ |
| 30 | H-Index | Medium | Counting sort / sort descending | https://leetcode.com/problems/h-index/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Replace Words** — Insert all roots into a Trie, then for each word walk until you hit a root end and replace. `O(total characters)`. HashSet-of-prefixes is the simpler alternative — mention the trade-off.
- **17. Palindrome Partitioning** — Backtrack over cut points, only recursing when the prefix is a palindrome. Precompute the `isPal` table to avoid re-checking.
- **18. Combination Sum II** — Sort; pass `i+1` (each number used once) and skip duplicates at the same depth with `if (i > start && c[i] === c[i-1]) continue;`.
- **19. Permutations II** — Sort, then skip `nums[i] === nums[i-1] && !used[i-1]` — that condition (not the `used[i-1]` variant) is the one that dedups correctly. Be ready to explain it.
- **20. Delete and Earn** — Bucket points by value (`sum[v] = v * count`), then it's House Robber over the value axis: taking `v` forbids `v-1`.
- **21. House Robber II** — Circular ⇒ run the linear solution twice: excluding the last house, and excluding the first. Handle `n === 1` separately.
- **22. Coin Change II** — Loop coins **outer**, amount inner, to count combinations not permutations. Swapping the loops silently gives the wrong answer — say why.
- **23. Maximum Sum Circular Subarray** — Answer = `max(kadaneMax, total - kadaneMin)`, except when all numbers are negative — then return `kadaneMax`.
- **24. Longest Palindromic Subsequence** — `dp[i][j] = dp[i+1][j-1] + 2` on a match else `max(dp[i+1][j], dp[i][j-1])`. Equivalent to LCS of `s` and `reverse(s)` — say that shortcut.
- **25. Rotate String** — `s.length === goal.length && (s + s).includes(goal)`. Give the KMP reasoning if pushed.
- **26. Group the People** — Map size → current bucket; when a bucket reaches its size, emit it and start fresh. Greedy is valid because any assignment works.
- **27. Find All Duplicates in an Array** — Values are in `[1, n]` ⇒ negate `nums[|v| - 1]`; if it's already negative, `|v|` is a duplicate. `O(1)` extra space.
- **28. Set Mismatch** — Same index-marking trick, or `sum`/`sumOfSquares` equations. State both, pick the marking one for clarity.
- **29. Kth Missing Positive Number** — At index `i`, the count of missing numbers is `arr[i] - (i + 1)`; binary search the first index where that exceeds `k`, answer `lo + k`.
- **30. H-Index** — Counting-sort citations into buckets `0..n`, then walk from the top accumulating until `count >= h`. `O(n)` beats sorting.

---

## Tier 3 — binary search on the answer & hards

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Kth Smallest Number in Multiplication Table | Hard | Binary search on value + counting | https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/ | ⬜ |
| 32 | Magnetic Force Between Two Balls | Medium | Binary search on the minimum gap | https://leetcode.com/problems/magnetic-force-between-two-balls/ | ⬜ |
| 33 | Minimum Number of Days to Make m Bouquets | Medium | Binary search on days + greedy check | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/ | ⬜ |
| 34 | Find the Smallest Divisor Given a Threshold | Medium | Binary search on the divisor | https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/ | ⬜ |
| 35 | Best Time to Buy and Sell Stock with Cooldown | Medium | State machine DP | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/ | ⬜ |
| 36 | Best Time to Buy and Sell Stock III | Hard | Four-state DP (2 transactions) | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/ | ⬜ |
| 37 | Substring with Concatenation of All Words | Hard | Windowed word-count matching | https://leetcode.com/problems/substring-with-concatenation-of-all-words/ | ⬜ |
| 38 | Shortest Path Visiting All Nodes | Hard | BFS over (node, visitedMask) | https://leetcode.com/problems/shortest-path-visiting-all-nodes/ | ⬜ |
| 39 | Redundant Connection II | Hard | Union-Find + in-degree-2 case analysis | https://leetcode.com/problems/redundant-connection-ii/ | ⬜ |
| 40 | Integer to English Words | Hard | Chunked-by-thousands recursion | https://leetcode.com/problems/integer-to-english-words/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Kth Smallest in Multiplication Table** — Binary search the value; count entries ≤ `mid` as `Σ min(mid / i, n)` per row. The count function is the whole problem.
- **32. Magnetic Force Between Two Balls** — Sort positions, binary search the answer gap, greedily place balls at least `gap` apart and check you placed `m`. Classic "maximise the minimum".
- **33. Minimum Days to Make m Bouquets** — Binary search days; the check scans for `k` consecutive bloomed flowers. Reject immediately if `m * k > n`.
- **34. Smallest Divisor Given a Threshold** — Binary search `[1, max(nums)]`; the check is `Σ ceil(num / d) <= threshold`. Same skeleton as Koko (Netflix folder) — recognise the family instantly.
- **35. Stock with Cooldown** — Three states: `hold`, `sold`, `rest`. `hold = max(hold, rest - price)`, `sold = hold + price`, `rest = max(rest, sold_prev)`. Draw the state machine before coding.
- **36. Stock III** — Track `buy1, sell1, buy2, sell2` in one pass, each derived from the previous. Generalises to "at most k transactions" — mention it.
- **37. Substring with Concatenation of All Words** — All words have equal length `L` ⇒ run `L` sliding windows offset by `0..L-1`, sliding word by word with a count map. The naive per-index check is the version they push you off.
- **38. Shortest Path Visiting All Nodes** — BFS with state `(node, bitmask of visited)`, seeded with every node at once. Goal: `mask === (1<<n)-1`. Revisiting nodes is allowed — that's why the mask is in the state.
- **39. Redundant Connection II** — Directed version: find a node with two parents (if any), then check whether removing each candidate edge leaves a valid rooted tree. Three cases — enumerate them out loud before coding.
- **40. Integer to English Words** — Recurse in chunks of three digits with suffixes `Thousand/Million/Billion`, plus tables for 0–19 and the tens. Handle `0` and stray spaces — that's the entire difficulty.

---

## 🔗 Cross-references (Salesforce asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| Two Sum, LRU Cache, Merge Intervals, Coin Change, Word Break, Number of Islands, Kth Largest Element in an Array | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Minimum Window Substring, Insert Interval, Split Array Largest Sum, Random Pick with Weight | [`../Google/`](../Google/google_dsa_questions.md) |
| Valid Palindrome II, Group Anagrams, LCA of a Binary Tree, Kth Smallest Element in a BST, Course Schedule | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Valid Parentheses, Reverse Linked List, Merge Two Sorted Lists, Maximum Subarray, Best Time to Buy and Sell Stock, Validate Binary Search Tree | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| Koko Eating Bananas, Binary Search, Partition Equal Subset Sum | [`../Netflix/`](../Netflix/netflix_dsa_questions.md) |

## 📅 Suggested order (2 weeks)

1. **Days 1–4 — lists & two pointers:** 1, 2, 3, 4, 5, 6, 7, 8, 25, 27
2. **Days 5–8 — trees & BST:** 9, 10, 11, 12, 13, 14, 15, 16, 24, 30
3. **Days 9–11 — backtracking & DP:** 17, 18, 19, 20, 21, 22, 23, 26, 35, 36
4. **Days 12–14 — binary search & hards:** 29, 32, 33, 34, 31, 37, 38, 39, 40, 28

> Salesforce-specific drill: after each solution, **write down 4 test cases and one "how would this fail in production" note**. Their interviewers explicitly ask for testing strategy, and it's the cheapest signal you can bank.
