# 🟦 Microsoft — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Microsoft owns the *fundamentals* — linked lists, matrices, trees, classic DP, and clean OOP design.
> Problems another folder owns are listed under **Cross-references**.

## What Microsoft actually tests

Microsoft's loop is typically **4–5 rounds, 45–60 min each**, ending with an "AA" (As-Appropriate) round with a senior manager.

- **Fundamentals over exotica.** Microsoft asks the textbook problems and expects *flawless* implementations — pointer manipulation, in-place matrix work, iterative traversals.
- **Linked lists are a Microsoft signature.** More reverse/reorder/cycle problems than any other big-tech loop.
- **They dig into edge cases.** Null head, single node, even/odd length, integer overflow — they will hand you the failing input if you don't find it.
- **Clean code is scored explicitly.** Naming, helper functions, and no duplicated logic actually move the rating.
- **Expect a light design/OOP question** (Trie, cache, browser history) even in the coding rounds.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — Microsoft signature: pointers, matrices, strings

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Reverse Linked List | Easy | Iterative prev/cur/next rewiring | https://leetcode.com/problems/reverse-linked-list/ | ⬜ |
| 2 | Copy List with Random Pointer | Medium | Interleave-clone or old→new HashMap | https://leetcode.com/problems/copy-list-with-random-pointer/ | ⬜ |
| 3 | Linked List Cycle II | Medium | Floyd's tortoise & hare + entry math | https://leetcode.com/problems/linked-list-cycle-ii/ | ⬜ |
| 4 | Add Two Numbers | Medium | Digit carry over two lists | https://leetcode.com/problems/add-two-numbers/ | ⬜ |
| 5 | Reverse Nodes in k-Group | Hard | Segment reversal with a dummy head | https://leetcode.com/problems/reverse-nodes-in-k-group/ | ⬜ |
| 6 | Rotate Image | Medium | Transpose + reverse rows, in place | https://leetcode.com/problems/rotate-image/ | ⬜ |
| 7 | Spiral Matrix | Medium | Four shrinking boundaries | https://leetcode.com/problems/spiral-matrix/ | ⬜ |
| 8 | Set Matrix Zeroes | Medium | Use row 0 / col 0 as marker storage | https://leetcode.com/problems/set-matrix-zeroes/ | ⬜ |
| 9 | String Compression | Medium | In-place run-length write pointer | https://leetcode.com/problems/string-compression/ | ⬜ |
| 10 | Reverse Words in a String | Medium | Trim + split, or reverse-all-then-each | https://leetcode.com/problems/reverse-words-in-a-string/ | ⬜ |
| 11 | Excel Sheet Column Number | Easy | Base-26 conversion | https://leetcode.com/problems/excel-sheet-column-number/ | ⬜ |
| 12 | Compare Version Numbers | Medium | Tokenise + pad-with-zero comparison | https://leetcode.com/problems/compare-version-numbers/ | ⬜ |
| 13 | Edit Distance | Medium | Classic 2D DP | https://leetcode.com/problems/edit-distance/ | ⬜ |
| 14 | Implement Trie (Prefix Tree) | Medium | Trie node design | https://leetcode.com/problems/implement-trie-prefix-tree/ | ⬜ |
| 15 | Design Add and Search Words Data Structure | Medium | Trie + wildcard DFS | https://leetcode.com/problems/design-add-and-search-words-data-structure/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Reverse Linked List** — `prev = null; while (cur) { next = cur.next; cur.next = prev; prev = cur; cur = next; }`. Be able to write the recursive version too — Microsoft asks for both in the same breath.
- **2. Copy List with Random Pointer** — Clean version: map original→copy in pass 1, wire `next`/`random` in pass 2. `O(1)`-space version: weave copies in between originals, set randoms as `cur.next.random = cur.random.next`, then unweave.
- **3. Linked List Cycle II** — After slow/fast meet, reset one pointer to head and advance both by 1; they meet at the cycle entry. Be ready to *prove* it with the `2(a+b) = a+b+c+b` argument.
- **4. Add Two Numbers** — Dummy head + carry; loop `while (l1 || l2 || carry)`. Follow-up "digits stored forward" (LC 445) — see the Uber folder.
- **5. Reverse Nodes in k-Group** — Count `k` nodes ahead first; if fewer than `k` remain, leave them as-is. Reverse the block and reconnect via `groupPrev`. Draw the four pointers before coding.
- **6. Rotate Image** — Transpose (swap `a[i][j]` with `a[j][i]` for `j > i`), then reverse each row. Counter-clockwise = transpose + reverse each column.
- **7. Spiral Matrix** — `top/bottom/left/right` bounds; after the left→right and top→bottom passes, **check `top <= bottom` and `left <= right` again** before the reverse passes, or single-row matrices double-count.
- **8. Set Matrix Zeroes** — First row and column store the flags; use one extra boolean for "column 0 itself had a zero". Write back from the bottom-right so flags aren't clobbered.
- **9. String Compression** — Read pointer counts a run, write pointer emits the char and then each digit of the count. Return the write index. Counts ≥ 10 are the trap.
- **10. Reverse Words in a String** — Split on whitespace, filter empties, reverse, join with a single space. If they demand `O(1)` space on a char array: reverse the whole thing, then reverse each word.
- **11. Excel Sheet Column Number** — `result = result * 26 + (ch - 'A' + 1)`. The inverse (number → title) is the follow-up and needs a `n--` before each `% 26`.
- **12. Compare Version Numbers** — Split on `.`, compare numerically, treat missing components as `0` so `1.0` equals `1.0.0`.
- **13. Edit Distance** — `dp[i][j] = dp[i-1][j-1]` on a match, else `1 + min(insert, delete, replace)`. Seed the first row/col with indices. Say the `O(min(m,n))`-space rolling-array optimisation.
- **14. Implement Trie** — Node = `{children: Map/array(26), isEnd: bool}`. `insert`/`search`/`startsWith` are the same walk with a different terminal check.
- **15. Design Add and Search Words** — Same Trie, but `.` in search forks into all children. Bound the recursion by word length and mention the worst case `O(26^m)`.

---

## Tier 2 — high-frequency core (trees, search, classic arrays)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Valid Parentheses | Easy | Stack matching | https://leetcode.com/problems/valid-parentheses/ | ⬜ |
| 17 | Min Stack | Medium | Auxiliary min stack / encoded delta | https://leetcode.com/problems/min-stack/ | ⬜ |
| 18 | Binary Tree Zigzag Level Order Traversal | Medium | BFS with alternating insert order | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ | ⬜ |
| 19 | Populating Next Right Pointers in Each Node | Medium | Level linking using the previous level | https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ | ⬜ |
| 20 | Validate Binary Search Tree | Medium | Min/max bounds recursion | https://leetcode.com/problems/validate-binary-search-tree/ | ⬜ |
| 21 | Construct Binary Tree from Preorder and Inorder Traversal | Medium | Recursive split with an index map | https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ | ⬜ |
| 22 | Search in Rotated Sorted Array | Medium | Binary search on the sorted half | https://leetcode.com/problems/search-in-rotated-sorted-array/ | ⬜ |
| 23 | Find Minimum in Rotated Sorted Array | Medium | Binary search against the right end | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ | ⬜ |
| 24 | Maximum Subarray | Medium | Kadane's algorithm | https://leetcode.com/problems/maximum-subarray/ | ⬜ |
| 25 | Best Time to Buy and Sell Stock | Easy | Running min + best profit | https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ | ⬜ |
| 26 | Merge Two Sorted Lists | Easy | Dummy head merge | https://leetcode.com/problems/merge-two-sorted-lists/ | ⬜ |
| 27 | Sort Colors | Medium | Dutch national flag, 3 pointers | https://leetcode.com/problems/sort-colors/ | ⬜ |
| 28 | Permutations | Medium | Backtracking with swap or used[] | https://leetcode.com/problems/permutations/ | ⬜ |
| 29 | Generate Parentheses | Medium | Backtracking with open/close counters | https://leetcode.com/problems/generate-parentheses/ | ⬜ |
| 30 | Find the Duplicate Number | Medium | Cycle detection on values-as-pointers | https://leetcode.com/problems/find-the-duplicate-number/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Valid Parentheses** — Map closers to openers, push openers, and on a closer check both "stack non-empty" and "top matches". Empty stack at the end = valid.
- **17. Min Stack** — Second stack that pushes `min(newVal, currentMin)` on every push, so pop stays `O(1)`. The single-stack encoded-difference trick is the "impress them" version.
- **18. Zigzag Level Order** — Normal BFS; on odd levels `unshift` instead of `push` (or reverse the level array). Don't reverse the queue itself.
- **19. Populating Next Right Pointers** — Use the already-linked level above: `node.left.next = node.right; node.right.next = node.next ? node.next.left : null`. That's the `O(1)`-space answer they're after.
- **20. Validate BST** — Pass `(low, high)` bounds down; checking only `left < node < right` locally is the classic wrong answer. In-order traversal with a `prev` value also works.
- **21. Build Tree from Preorder + Inorder** — Preorder gives the root; the inorder index (via a HashMap) gives the left/right sizes. Carry a moving preorder pointer instead of slicing arrays.
- **22. Search in Rotated Sorted Array** — One half is always sorted: figure out which by comparing `nums[lo] <= nums[mid]`, then test whether the target lies inside that half.
- **23. Find Minimum in Rotated Sorted Array** — Compare `nums[mid]` with `nums[hi]` (not `lo`); if greater, the min is right of mid. Duplicates version needs `hi--` as the fallback.
- **24. Maximum Subarray** — `cur = max(x, cur + x); best = max(best, cur)`. Know the divide-and-conquer variant — Microsoft asks for it as the follow-up.
- **25. Best Time to Buy and Sell Stock** — One pass tracking the min price so far. Frame it as "Kadane on the diff array" if they push.
- **26. Merge Two Sorted Lists** — Dummy node, splice the smaller head each step, attach the remaining list at the end. This is a warm-up — do it in under 4 minutes.
- **27. Sort Colors** — `low`, `mid`, `high`: on 0 swap with `low` and advance both; on 2 swap with `high` and **don't** advance mid; on 1 just advance mid.
- **28. Permutations** — Swap-based backtracking is `O(1)` extra space; the `used[]` version is easier to extend to Permutations II (see Salesforce folder).
- **29. Generate Parentheses** — Only add `(` while `open < n`, only add `)` while `close < open`. Catalan number count — say it.
- **30. Find the Duplicate Number** — Read-only + `O(1)` space ⇒ treat `nums[i]` as a next-pointer and run Floyd's. Binary search on the value range (counting elements ≤ mid) is the other accepted answer.

---

## Tier 3 — Microsoft hards & design finishers

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | LFU Cache | Hard | HashMap + frequency buckets of DLLs | https://leetcode.com/problems/lfu-cache/ | ⬜ |
| 32 | Word Ladder II | Hard | BFS layering + parent DAG backtrack | https://leetcode.com/problems/word-ladder-ii/ | ⬜ |
| 33 | Largest Rectangle in Histogram | Hard | Monotonic increasing stack | https://leetcode.com/problems/largest-rectangle-in-histogram/ | ⬜ |
| 34 | Maximal Rectangle | Hard | Histogram per row | https://leetcode.com/problems/maximal-rectangle/ | ⬜ |
| 35 | N-Queens | Hard | Backtracking with diagonal sets | https://leetcode.com/problems/n-queens/ | ⬜ |
| 36 | Sudoku Solver | Hard | Constraint backtracking | https://leetcode.com/problems/sudoku-solver/ | ⬜ |
| 37 | Longest Increasing Subsequence | Medium | Patience sorting / DP + binary search | https://leetcode.com/problems/longest-increasing-subsequence/ | ⬜ |
| 38 | The Skyline Problem | Hard | Sweep line + max-heap | https://leetcode.com/problems/the-skyline-problem/ | ⬜ |
| 39 | Design Browser History | Medium | Doubly linked list / two stacks | https://leetcode.com/problems/design-browser-history/ | ⬜ |
| 40 | Multiply Strings | Medium | Grade-school multiplication into an index grid | https://leetcode.com/problems/multiply-strings/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. LFU Cache** — Three structures: `key → node`, `key → freq`, `freq → doubly linked list (LRU order)`. Track `minFreq` so eviction is `O(1)`. Say "LRU inside LFU" out loud — that's the insight.
- **32. Word Ladder II** — BFS level by level building `word → parents`, stop at the level where you first hit `endWord`, then DFS backwards to rebuild all shortest paths. Deleting each visited level from the dictionary keeps it fast.
- **33. Largest Rectangle in Histogram** — Increasing stack of indices; when a shorter bar arrives, pop and compute `height * (i - stack.top() - 1)`. Sentinel `0` at the end flushes the stack.
- **34. Maximal Rectangle** — Build a running "heights" array per row (reset to 0 on a `'0'`), then run #33 for each row. Says `O(mn)` total.
- **35. N-Queens** — Track occupied `cols`, `r+c` diagonals, and `r-c` anti-diagonals in three Sets so validity is `O(1)`. Place one queen per row.
- **36. Sudoku Solver** — Nine row/col/box bitmasks or Sets; try 1–9 in the first empty cell, recurse, undo. Choosing the most-constrained cell first is the optimisation to mention.
- **37. Longest Increasing Subsequence** — `O(n²)` DP first, then the `O(n log n)` tails-array version (binary search for the first tail ≥ x and replace). Tails array is **not** the LIS itself — say that.
- **38. The Skyline Problem** — Sweep events sorted by x (starts before ends, taller first). Max-heap of active heights with lazy deletion; emit a point whenever the max changes.
- **39. Design Browser History** — Doubly linked list makes `visit` truncate the forward chain in `O(1)`. The array + pointer version is simpler and usually accepted — just handle `steps` clamping.
- **40. Multiply Strings** — `result[i+j+1] += a[i] * b[j]`, then carry backwards. Result length is at most `m+n`. Strip leading zeros at the end (and short-circuit on `"0"`).

---

## 🔗 Cross-references (Microsoft asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| Two Sum, LRU Cache, Number of Islands, Merge k Sorted Lists, Trapping Rain Water, Coin Change, Word Break, Course Schedule II | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Median of Two Sorted Arrays, Minimum Window Substring, Word Search II, Find Median from Data Stream, Insert Interval | [`../Google/`](../Google/google_dsa_questions.md) |
| LCA of a Binary Tree, Serialize and Deserialize Binary Tree, Clone Graph, Subsets, Course Schedule | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| 3Sum, Reorder List, Palindrome Linked List, Climbing Stairs, House Robber | [`../Apple/`](../Apple/apple_dsa_questions.md) |

## 📅 Suggested order (3 weeks)

1. **Week 1 — linked lists & matrices:** 1, 26, 4, 3, 2, 5, 6, 7, 8, 40
2. **Week 2 — trees, search, stacks:** 18, 19, 20, 21, 16, 17, 22, 23, 30, 27
3. **Week 3 — DP, backtracking, design:** 13, 24, 25, 37, 28, 29, 35, 36, 14, 15, 31, 33, 34, 38, 39

> Microsoft-specific drill: for every linked-list problem, **draw the pointers on paper before typing**, and test with a 0-node, 1-node, and 2-node list. That single habit fixes the majority of Microsoft round rejections.
